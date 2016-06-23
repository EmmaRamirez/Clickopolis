import Building = require('./building');

class Buildings {
  items:Building[];

  push(building:Building):void {
    this.items.push(building);
  }

  get(query:string):Building {
    let b = this.items;
    let bi:Building;

    for (let i = 0; i < b.length; i++) {
      if (b[i].name === query) {
        bi = b[i];
      }
    }

    return bi;
  }

  constructor(items:Building[]) {
    this.items = items;
  }

}

export = Buildings;
