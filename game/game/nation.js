"use strict";
var Nation = (function () {
    function Nation(name, image, description, influence, strength, defense, cash, peacefulness, isAtWar) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.influence = influence;
        this.strength = strength;
        this.defense = defense;
        this.cash = cash;
        this.peacefulness = peacefulness;
        this.isAtWar = isAtWar;
    }
    return Nation;
}());
module.exports = Nation;
//# sourceMappingURL=nation.js.map