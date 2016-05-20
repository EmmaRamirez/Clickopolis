"use strict";
var Tech = (function () {
    function Tech(name, era, description, effects) {
        this.name = name;
        this.era = era;
        //this.prerequisite = prequisite;
        this.description = description;
        this.effects = effects;
        this.available = false;
        this.purchased = false;
        this.selected = false;
    }
    return Tech;
}());
module.exports = Tech;
//# sourceMappingURL=tech.js.map