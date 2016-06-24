class Building {
  name: string;
  amount: number;
  prodCost: number;
  cashCost: number;
  description: string;
  effect: string;
  func: Function;

  constructor(name:string, amount:number, prodCost:number, cashCost:number, description:string, effect:string, func:Function = null) {
    this.name = name;
    this.amount = amount;
    this.prodCost = prodCost;
    this.cashCost = cashCost;
    this.description = description;
    this.effect = effect;
    this.func = func;
  }
}

export = Building;
