class Legacy {
  name: string;
  type: string;
  level: number;
  maxLevel: number;
  cost: number;
  description: string;

  constructor(name: string, type: string, level: number, maxLevel: number, cost:number, description: string) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.maxLevel = maxLevel;
    this.cost = cost;
    this.description = description;
  }
}

export = Legacy;
