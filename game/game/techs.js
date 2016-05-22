"use strict";
var Techs = (function () {
    function Techs(items) {
        this.items = items;
    }
    Techs.prototype.push = function (tech) {
        this.items.push(tech);
    };
    Techs.prototype.get = function (query) {
        var t = this.items;
        var ti;
        for (var i = 0; i < t.length; i++) {
            if (t[i].name === query) {
                ti = t[i];
            }
        }
        return ti;
    };
    return Techs;
}());
module.exports = Techs;
//# sourceMappingURL=techs.js.map