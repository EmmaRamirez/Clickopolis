class Wonder {
  name: string;
  img: string;
  buildTime: number;
  remainingTime: number;
  description: string;
  effect: string;
  func: Function;

  getImg():string {
    return '../img/' + this.img + '.png';
  }

  getTimePercent():string {
    return `%${(this.remainingTime / this.buildTime) * 100}`;
  }

  constructor(name: string, img: string, buildTime: number, remainingTime: number, description: string, effect: string, func: Function = function () {}) {
    this.name = name;
    this.img = img;
    this.buildTime = buildTime;
    this.remainingTime = remainingTime;
    this.description = description;
    this.effect = effect;
    this.func = func;
  }
}

export = Wonder;
