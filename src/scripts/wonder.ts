class Wonder {
  name: string;
  img: string;
  time: number;
  description: string;
  effect: string;
  func: Function;

  getImg():string {
    return '../img/' + this.img + '.png';
  }

  constructor(name: string, img: string, time: number, description: string, effect: string, func: Function = function () {}) {
    this.name = name;
    this.img = img;
    this.time = time;
    this.description = description;
    this.effect = effect;
    this.func = func;
  }
}

export = Wonder;
