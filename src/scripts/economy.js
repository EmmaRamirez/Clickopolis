"use strict";
var EconomySystem;
(function (EconomySystem) {
    EconomySystem[EconomySystem["traditional"] = 0] = "traditional";
    EconomySystem[EconomySystem["mixed"] = 1] = "mixed";
    EconomySystem[EconomySystem["freeMarket"] = 2] = "freeMarket";
    EconomySystem[EconomySystem["socialism"] = 3] = "socialism";
    EconomySystem[EconomySystem["communism"] = 4] = "communism";
})(EconomySystem || (EconomySystem = {}));
var Economy = (function () {
    function Economy() {
    }
    return Economy;
}());
module.exports = Economy;
//# sourceMappingURL=economy.js.map