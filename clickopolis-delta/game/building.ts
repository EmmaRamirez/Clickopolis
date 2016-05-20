class Building {
  name: string;
  amount: number;
  prodCost: number;
  cashCost: number;
  description: string;
  effect: string;

  constructor(name:string, amount:number, prodCost:number, cashCost:number, description:string, effect:string) {
    this.name = name;
    this.amount = amount;
    this.prodCost = prodCost;
    this.cashCost = cashCost;
    this.description = description;
    this.effect = effect;
  }
}

export = Building;
