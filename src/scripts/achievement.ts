import Utils = require('./utils');

let u = new Utils();

class Achievement {
  name: string;
  className: string;
  unlocked: boolean;
  checkFunc: Function;


  constructor(name: string, checkFunc: Function, unlocked: boolean = false) {
    this.name = name;
    this.className = u.dasherize(name);
    this.checkFunc = Function;
    this.unlocked = unlocked
  }
}

export = Achievement;
