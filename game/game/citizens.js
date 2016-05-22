"use strict";
var Citizens = (function () {
    function Citizens(items) {
        this.items = items;
    }
    Citizens.prototype.push = function (citizen) {
        this.items.push(citizen);
    };
    Citizens.prototype.get = function (query) {
        var c = this.items;
        var ci;
        for (var i = 0; i < c.length; i++) {
            if (c[i].name === query) {
                ci = c[i];
            }
        }
        return ci;
    };
    return Citizens;
}());
module.exports = Citizens;
//# sourceMappingURL=citizens.js.map