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
        switch (query) {
            case 'food':
                return r[0];
            case 'prod':
                return r[1];
            case 'stone':
                return r[2];
            case 'fish':
                return r[3];
            default:
                return r[4];
        }
    };
    return Resources;
}());
module.exports = Resources;
//# sourceMappingURL=resources.js.map