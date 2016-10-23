class Legacy {
  name: string;
  type: string;
  level: number;
  cost: number;
  descriptions: string[];
  func: Function;

  constructor(name: string, type: string, level: number, cost:number, descriptions: string[], func: Function) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.cost = cost;
    this.descriptions = descriptions;
    this.func = func;
  }
}

export = Legacy;
