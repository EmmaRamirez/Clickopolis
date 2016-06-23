"use strict";
var TradeDeal = (function () {
    function TradeDeal(tradingNation, gave, gaveAmount, forResource, forAmount, year) {
        this.tradingNation = tradingNation;
        this.gaveResource = gave;
        this.gaveAmount = gaveAmount;
        this.forResource = forResource;
        this.forAmount = forAmount;
        this.year = year;
    }
    return TradeDeal;
}());
module.exports = TradeDeal;
//# sourceMappingURL=trade-deal.js.map