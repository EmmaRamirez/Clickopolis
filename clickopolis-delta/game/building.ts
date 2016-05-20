class Building {
  name: string;
  prodCost: number;
  cashCost: number;
  description: string;
  effect: string;

  constructor(name:string, prodCost:number, cashCost:number, description:string, effect:string) {
    this.name = name;
    this.prodCost = prodCost;
    this.cashCost = cashCost;
    this.description = description;
    this.effect = effect;
  }
}

export = Building;
