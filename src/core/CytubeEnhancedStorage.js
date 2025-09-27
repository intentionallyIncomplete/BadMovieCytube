// src/core/CytubeEnhancedStorage.js
/* global _, CHANNEL */
(function attach(global) {
    var CE_DEBUG = !!global.CE_DEBUG;
    function debugLog() {
        if (!CE_DEBUG || typeof console === "undefined" || !console.log) return;
        var args = ["[CytubeEnhancedStorage]"]; // eslint-disable-next-line no-console
        console.log.apply(console, args.concat([].slice.call(arguments)));
    }
    function CytubeEnhancedStorage(namespace, isGlobal, autosave) {
        var self = this;
        isGlobal = (isGlobal === undefined) || isGlobal;
        autosave = (autosave !== undefined) && autosave;

        var defaults = {};
        var initial = {};
        var values = {};

        debugLog("init", {
            namespace: namespace,
            isGlobal: isGlobal,
            autosave: autosave,
            channel: isGlobal ? "" : (typeof CHANNEL !== "undefined" ? CHANNEL.name : undefined)
        });

        try {
            values = JSON.parse(window.localStorage.getItem(namespace + "-" + (isGlobal ? "" : CHANNEL.name) + namespace));
            values = _.isPlainObject(values) ? values : {};
        } catch (e) {
            values = {};
        }

        initial = _.cloneDeep(values);

        try { debugLog("loaded", { keys: Object.keys(values).length }); } catch (e) { /* noop */ }

        this.getDefault = function (key) {
            return defaults[key];
        };

        this.setDefault = function (key, val) {
            val = _.cloneDeep(val);
            defaults[key] = val;
            values[key] = values[key] !== undefined ? values[key] : val;
            initial[key] = initial[key] !== undefined ? initial[key] : val;
            debugLog("setDefault", key, val);
        };

        this.get = function (key) {
            return values[key];
        };

        this.set = function (key, val) {
            var v = values[key] = _.cloneDeep(val);
            if (autosave) self.save();
            debugLog("set", key, val);
            return v;
        };

        this.toggle = function (key) {
            var v = values[key] = !values[key];
            if (autosave) self.save();
            debugLog("toggle", key, v);
            return v;
        };

        this.isDirty = function (keys) {
            var dirty = false;
            if (_.isArray(keys)) {
                for (var n in keys) {
                    if (!equals(values[n], initial[n])) {
                        dirty = true;
                        break;
                    }
                }
            } else {
                dirty = !equals(values[keys], initial[keys]);
            }
            debugLog("isDirty", keys, dirty);
            return dirty;
        };

        this.save = function () {
            try {
                var ok = window.localStorage.setItem(namespace + "-" + (isGlobal ? "" : CHANNEL.name) + namespace, JSON.stringify(values));
                try { debugLog("save", { namespace: namespace, isGlobal: isGlobal, keys: Object.keys(values).length }); } catch (e) { /* noop */ }
                return ok;
            } catch (e) {
                return false;
            }
        };

        this.reset = function () {
            values = _.cloneDeep(defaults);
            debugLog("reset");
        };

        var equals = function (a, b) {
            return _.isArray(a) && _.isArray(b)
                ? _.difference(a, b).length === 0 && _.difference(b, a).length === 0
                : _.isEqual(a, b);
        };
    }

    global.CytubeEnhancedStorage = CytubeEnhancedStorage;
})(window);