import { Nation } from '../nation';
import { Resource } from '../resource';

export class TradeRoute {
  tradeRouteTo: Nation;
  tradingDistance: number;
  tradingTime: number;
  tradingCash: number;
  tradingFood: number;
  tradingProd: number;
  tradingResearch: number;
  tradingResource: Resource;

  constructor(tradeRouteTo: Nation, tradingDistance: number, tradingTime: number) {
    this.tradeRouteTo = tradeRouteTo;
    this.tradingDistance = tradingDistance;
    this.tradingTime = tradingTime;
  }
}
