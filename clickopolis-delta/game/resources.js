"use strict";
var Resources = (function () {
    function Resources(items) {
        this.items = items;
    }
    Resources.prototype.push = function (resource) {
        this.items.push(resource);
    };
    Resources.prototype.get = function (query) {
        var r = this.items;
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
module.exports = Resources;
//# sourceMappingURL=resources.js.map