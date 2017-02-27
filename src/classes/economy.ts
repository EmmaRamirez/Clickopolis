import { tradeRoute, tradeDeal } from './trade';

export enum EconomySystem {
  traditional,
  mixed,
  freeMarket,
  socialism,
  communism
}

export class Economy {
  cash: number;
  system: EconomySystem;

  tradeDeals: tradeDeal[];
  tradeRoutes: tradeRoute[];

  constructor() {

  }

}
