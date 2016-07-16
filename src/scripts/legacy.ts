class Legacy {
  name: string;
  type: string;
  level: number;
  descriptions: string[];
  func: Function;

  constructor(name: string, type: string, level: number, descriptions: string[], func: Function) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.descriptions = descriptions;
    this.func = func;
  }
}

export = Legacy;
