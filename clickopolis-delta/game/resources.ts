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
      default:
        return r[2];
    }

  }

  constructor(items:Resource[]) {
    this.items = items;
  }


}

export = Resources;
