import tradeRoute = require('./trade-route');
import tradeDeal = require('./trade-deal');

enum EconomySystem {
  traditional,
  mixed,
  freeMarket,
  socialism,
  communism
}

class Economy {
  cash: number;
  system: EconomySystem;

  tradeDeals: tradeDeal[];
  tradeRoutes: tradeRoute[];

  constructor() {

  }

}

export = Economy;
