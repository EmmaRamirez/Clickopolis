"use strict";
var Nation = (function () {
    function Nation(name, image, color, description, influence, strength, defense, cash, peacefulness, isAtWar) {
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
    }
    return Nation;
}());
module.exports = Nation;
//# sourceMappingURL=nation.js.map