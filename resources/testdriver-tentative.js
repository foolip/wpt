(function() {
    "use strict";

    /**
     * @namespace {test_driver}
     */
    Object.assign(window.test_driver, {
        /**
         * Get the accessibility tree.
         *
         * Matches the `Accessibility.getFullAXTree
         * <https://chromedevtools.github.io/devtools-protocol/tot/Accessibility/#method-getFullAXTree>`_
         * Chrome Devtools Protocol method.
         *
         * @param {WindowProxy} context - Browsing context in which
         *                                to run the call, or null for the current
         *                                browsing context.
         *
         * @returns {Promise} Fulfilled with an array of objects.
         */
        get_accessibility_tree: function(context=null) {
            return window.test_driver_internal.get_accessibility_tree(context);
        }
    });

    Object.assign(window.test_driver_internal, {
        async get_accessibility_tree(context=null) {
            throw new Error("get_accessibility_tree() is not implemented by testdriver-vendor.js");
        }
    });
})();
