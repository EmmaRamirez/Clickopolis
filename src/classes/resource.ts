class Resource {
  name: string;
  perClick: number;
  perSecond: number;
  max: number;
  total: number;
  image: string;
  description: string;

  unlocked: boolean;
  visible: boolean;

  foodBonus: number;
  prodBonus: number;
  foodBonusPS: number;
  prodBonusPS: number;
  happinessBonus: number;
  healthBonus: number;
  pollutionBonus: number;
  influenceBonus: number;
  faithBonus: number;

  exchangeRate: number;

  constructor(name:string, perClick:number, perSecond:number, max:number, total:number, image:string, description: string, unlocked: boolean, visible: boolean = true) {
    this.name = name;
    this.perClick = perClick;
    this.perSecond = perSecond;
    this.max = max;
    this.total = total;
    this.image = image;
    this.description = description;
    this.unlocked = unlocked;
    this.visible = visible;
  }

}

export = Resource;
