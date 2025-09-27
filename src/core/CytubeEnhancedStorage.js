// src/core/CytubeEnhancedStorage.js
(function attach(global) {
    function CytubeEnhancedStorage(namespace, isGlobal, autosave) {
        var self = this;
        isGlobal = (isGlobal === undefined) || isGlobal;
        autosave = (autosave !== undefined) && autosave;

        var defaults = {};
        var initial = {};
        var values = {};

        try {
            values = JSON.parse(window.localStorage.getItem(namespace + "-" + (isGlobal ? "" : CHANNEL.name) + namespace));
            values = _.isPlainObject(values) ? values : {};
        } catch (e) {
            values = {};
        }

        initial = _.cloneDeep(values);

        this.getDefault = function (key) {
            return defaults[key];
        };

        this.setDefault = function (key, val) {
            val = _.cloneDeep(val);
            defaults[key] = val;
            values[key] = values[key] !== undefined ? values[key] : val;
            initial[key] = initial[key] !== undefined ? initial[key] : val;
        };

        this.get = function (key) {
            return values[key];
        };

        this.set = function (key, val) {
            var v = values[key] = _.cloneDeep(val);
            if (autosave) self.save();
            return v;
        };

        this.toggle = function (key) {
            var v = values[key] = !values[key];
            if (autosave) self.save();
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
            return dirty;
        };

        this.save = function () {
            try {
                return window.localStorage.setItem(namespace + "-" + (isGlobal ? "" : CHANNEL.name) + namespace, JSON.stringify(values));
            } catch (e) {
                return false;
            }
        };

        this.reset = function () {
            values = _.cloneDeep(defaults);
        };

        var equals = function (a, b) {
            return _.isArray(a) && _.isArray(b)
                ? _.difference(a, b).length === 0 && _.difference(b, a).length === 0
                : _.isEqual(a, b);
        };
    }

    global.CytubeEnhancedStorage = CytubeEnhancedStorage;
})(window);