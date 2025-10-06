// src/core/CytubeEnhancedStorage.js
/* global _, CHANNEL */
// TODO: replace lodash globals with explicit imports when bundler updated

const CE_DEBUG = Boolean(typeof window !== 'undefined' && window.CE_DEBUG);

function debugLog(...args) {
    if (!CE_DEBUG || typeof console === 'undefined' || typeof console.log !== 'function') {
        return;
    }
    console.log('[CytubeEnhancedStorage]', ...args); // eslint-disable-line no-console
}

function safeChannelName() {
    if (typeof CHANNEL === 'undefined' || !CHANNEL || !CHANNEL.name) {
        return '';
    }
    return CHANNEL.name;
}

function buildStorageKey(namespace, isGlobal) {
    const channel = isGlobal ? '' : safeChannelName();
    return `${namespace}-${channel}${namespace}`;
}

function equals(a, b) {
    return _.isArray(a) && _.isArray(b)
        ? _.difference(a, b).length === 0 && _.difference(b, a).length === 0
        : _.isEqual(a, b);
}

export function CytubeEnhancedStorage(namespace, isGlobal = true, autosave = false) {
    const globalFlag = Boolean(isGlobal);
    const autoSaveFlag = Boolean(autosave);

    let defaults = {};
    let initial = {};
    let values = {};

    debugLog('init', {
        namespace,
        isGlobal: globalFlag,
        autosave: autoSaveFlag,
        channel: globalFlag ? '' : safeChannelName()
    });

    try {
        const raw = window.localStorage.getItem(buildStorageKey(namespace, globalFlag));
        const parsed = JSON.parse(raw);
        values = _.isPlainObject(parsed) ? parsed : {};
    } catch (e) {
        values = {};
    }

    initial = _.cloneDeep(values);

    try {
        debugLog('loaded', { keys: Object.keys(values).length });
    } catch (e) {
        // noop
    }

    this.getDefault = function getDefault(key) {
        return defaults[key];
    };

    this.setDefault = function setDefault(key, val) {
        const cloned = _.cloneDeep(val);
        defaults[key] = cloned;
        if (values[key] === undefined) {
            values[key] = cloned;
        }
        if (initial[key] === undefined) {
            initial[key] = cloned;
        }
        debugLog('setDefault', key, val);
    };

    this.get = function get(key) {
        return values[key];
    };

    this.set = function set(key, val) {
        const cloned = _.cloneDeep(val);
        values[key] = cloned;
        if (autoSaveFlag) this.save();
        debugLog('set', key, val);
        return cloned;
    };

    this.toggle = function toggle(key) {
        const toggled = !values[key];
        values[key] = toggled;
        if (autoSaveFlag) this.save();
        debugLog('toggle', key, toggled);
        return toggled;
    };

    this.isDirty = function isDirty(keys) {
        let dirty = false;
        if (_.isArray(keys)) {
            for (let i = 0; i < keys.length; i += 1) {
                const key = keys[i];
                if (!equals(values[key], initial[key])) {
                    dirty = true;
                    break;
                }
            }
        } else {
            dirty = !equals(values[keys], initial[keys]);
        }
        debugLog('isDirty', keys, dirty);
        return dirty;
    };

    this.save = function save() {
        try {
            const key = buildStorageKey(namespace, globalFlag);
            const ok = window.localStorage.setItem(key, JSON.stringify(values));
            try {
                debugLog('save', {
                    namespace,
                    isGlobal: globalFlag,
                    keys: Object.keys(values).length
                });
            } catch (err) {
                // noop
            }
            return ok;
        } catch (err) {
            return false;
        }
    };

    this.reset = function reset() {
        values = _.cloneDeep(defaults);
        debugLog('reset');
    };
}