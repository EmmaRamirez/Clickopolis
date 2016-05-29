import Citizen = require('./citizen');

class Citizens {
  items:Citizen[];

  push(citizen:Citizen) {
    this.items.push(citizen);
  }

  get(query:string):Citizen {
    let c = this.items;
    let ci:Citizen;

    for (let i = 0; i < c.length; i++) {
      if (c[i].name === query) {
        ci = c[i];
      }
    }

    return ci;

  }

  constructor(items: Citizen[]) {
    this.items = items;
  }
}

export = Citizens;
