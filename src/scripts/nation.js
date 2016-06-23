"use strict";
var Nation = (function () {
    function Nation(name, image, color, description, influence, strength, defense, cash, peacefulness, isAtWar, timesInteracted) {
        if (timesInteracted === void 0) { timesInteracted = 0; }
        this.name = name;
        this.image = image;
        this.color = color;
        this.description = description;
        this.influence = influence;
        this.strength = strength;
        this.defense = defense;
        this.cash = cash;
        this.peacefulness = peacefulness;
        this.isAtWar = isAtWar;
        this.timesInteracted = timesInteracted;
    }
    return Nation;
}());
module.exports = Nation;
//# sourceMappingURL=nation.js.map