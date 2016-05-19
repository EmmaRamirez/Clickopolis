import Resource = require('./resource');

class Resources {
  items:Resource[];

  push(resource:Resource) {
    this.items.push(resource);
  }

  get(query:string):Resource {
    let r = this.items;
    let ri:Resource;

    switch (query) {
      case 'food':
        return r[0];
      case 'prod':
        return r[1];
      case 'stone':
        return r[2];
      case 'fish':
        return r[3]
      default:
        return r[4];
    }

  }

  constructor(items:Resource[]) {
    this.items = items;
  }


}

export = Resources;
