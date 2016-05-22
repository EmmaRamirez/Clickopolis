"use strict";
var Building = (function () {
    function Building(name, amount, prodCost, cashCost, description, effect) {
        this.name = name;
        this.amount = amount;
        this.prodCost = prodCost;
        this.cashCost = cashCost;
        this.description = description;
        this.effect = effect;
    }
    return Building;
}());
module.exports = Building;
//# sourceMappingURL=building.js.map