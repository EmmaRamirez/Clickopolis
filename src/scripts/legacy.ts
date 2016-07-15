class Legacy {
  name: string;
  type: string;
  level: number;
  func: Function;

  constructor(name: string, type: string, level: number, func: Function) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.func = func;
  }
}

export = Legacy;
