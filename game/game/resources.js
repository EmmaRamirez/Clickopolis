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
        var ri;
        for (var i = 0; i < r.length; i++) {
            if (r[i].name === query) {
                ri = r[i];
            }
        }
        return ri;
    };
    return Resources;
}());
module.exports = Resources;
//# sourceMappingURL=resources.js.map