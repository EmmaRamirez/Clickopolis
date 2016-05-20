"use strict";
var Tech = (function () {
    function Tech() {
    }
    Tech.prototype.Tech = function (name, era, prequisite, description, effects) {
        this.name = name;
        this.era = era;
        this.prerequisite = prequisite;
        this.description = description;
        this.effects = effects;
        this.available = false;
        this.purchased = false;
    };
    return Tech;
}());
module.exports = Tech;
//# sourceMappingURL=tech.js.map