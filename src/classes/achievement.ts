import { Utils } from './utils';

let u = new Utils();

export class Achievement {
  name: string;
  className: string;
  description: string;
  unlocked: boolean;
  checkFunc: Function;


  constructor(name: string, description: string, checkFunc: Function = function () { return false; }, unlocked: boolean = false) {
    this.name = name;
    this.className = u.dasherize(name);
    this.description = description;
    this.checkFunc = Function;
    this.unlocked = unlocked
  }
}
