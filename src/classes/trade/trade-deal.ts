import { Resource } from '../resource';
import { Nation } from '../nation';

export class TradeDeal {
  tradingNation: Nation;
  gaveResource: Resource;
  gaveAmount: number;
  forResource: Resource;
  forAmount: number;
  year: number;

  constructor(tradingNation: Nation, gave: Resource, gaveAmount: number, forResource: Resource, forAmount: number, year: number) {
    this.tradingNation = tradingNation;
    this.gaveResource = gave;
    this.gaveAmount = gaveAmount;
    this.forResource = forResource;
    this.forAmount = forAmount;
    this.year = year;
  }
}
