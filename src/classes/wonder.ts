export class Wonder {
  name: string;
  img: string;
  buildTime: number;
  remainingTime: number;
  visible: boolean;
  enabled: boolean;
  description: string;
  effect: string;
  checkFunc: Function;
  func: Function;

  getImg():string {
    return 'img/' + this.img + '.png';
  }

  getTimePercent():string {
    return `%${((this.buildTime - this.remainingTime) / this.buildTime) * 100}`;
  }

  constructor(name: string, img: string, buildTime: number, remainingTime: number, visible: boolean, enabled: boolean, description: string, effect: string, checkFunc: Function = function () { return false; }, func: Function = function () {}) {
    this.name = name;
    this.img = img;
    this.buildTime = buildTime;
    this.remainingTime = remainingTime;
    this.visible = visible;
    this.enabled = enabled;
    this.description = description;
    this.effect = effect;
    this.checkFunc = checkFunc;
    this.func = func;
  }
}
