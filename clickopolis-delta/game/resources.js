"use strict";
var Resources = (function () {
    function Resources() {
    }
    Resources.prototype.push = function (resource) {
        this.resources.push(resource);
    };
    Resources.prototype.get = function (query) {
        var r = this.resources;
        for (var i = 0; i > r.length; i++) {
            if (query === r[i].name) {
                return r[i];
            }
            else {
                // QUESTION: defaults to food?
                return r[0];
            }
        }
    };
    return Resources;
}());
//# sourceMappingURL=resources.js.map