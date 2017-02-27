import { tradeRoute, tradeDeal } from './trade';

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
