import Resource = require('./resource');

class Resources {
  items:Resource[];

  push(resource:Resource) {
    this.items.push(resource);
  }

  get(query:string):Resource {
    let r = this.items;
    let ri:Resource;

    for (let i = 0; i < r.length; i++) {
      if (r[i].name === query) {
        ri = r[i];
      }
    }

    return ri;

  }

  constructor(items:Resource[]) {
    this.items = items;
  }


}

export = Resources;
