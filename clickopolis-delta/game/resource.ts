class Resource {
  name: string;
  perClick: number;
  perSecond: number;
  max: number;
  total: number;
  image: string;
  description: string;

  foodBonus: number;
  prodBonus: number;
  healthBonus: number;
  pollutionBonus: number;
  influenceBonus: number;
  faithBonus: number;

  exchangeRate: number;

  constructor(name:string, perClick:number, perSecond:number, max:number, total:number) {
    this.name = name;
    this.perClick = perClick;
    this.perSecond = perSecond;
    this.max = max;
    this.total = total;
  }

}

export = Resource;
