import { TradeRoute, TradeDeal } from './trade';

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

  tradeDeals: TradeDeal[];
  tradeRoutes: TradeRoute[];

  constructor() {

  }

}
