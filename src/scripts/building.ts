class Building {
  name: string;
  amount: number;
  prodCost: number;
  cashCost: number;
  description: string;
  effect: string;
  visible: boolean;
  enabled: boolean;
  func: Function;

  constructor(name:string, amount:number, prodCost:number, cashCost:number, description:string, effect:string, visible: boolean, enabled: boolean, func:Function = null) {
    this.name = name;
    this.amount = amount;
    this.prodCost = prodCost;
    this.cashCost = cashCost;
    this.description = description;
    this.effect = effect;
    this.visible = visible;
    this.enabled = enabled;
    this.func = func;
  }
}

export = Building;
