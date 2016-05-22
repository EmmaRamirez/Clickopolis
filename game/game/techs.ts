import Tech = require('./tech');

class Techs {
  items: Tech[];


  push(tech:Tech) {
    this.items.push(tech);
  }

  get(query:string):Tech {
    let t = this.items;
    let ti:Tech;

    for (let i = 0; i < t.length; i++) {
      if (t[i].name === query) {
        ti = t[i];
      }
    }

    return ti;
  }

  constructor(items:Tech[]) {
    this.items = items;
  }
}

export = Techs;
