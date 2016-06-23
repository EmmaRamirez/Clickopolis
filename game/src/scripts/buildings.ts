import Building = require('./building');

class Buildings {
  items:Building[];

  push(building:Building):void {
    this.items.push(building);
  }

  get(query:string):Citizen {
    let b = this.item;
    let bi:Building;

    for (let i = 0; i < b.length; i++) {
      if (b[i].name === query) {
        bi = b[i];
      }
    }

    return bi;
  }

  constructor() {
    this.items = items;
  }

}

export = Buildings;
