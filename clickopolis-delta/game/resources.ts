import Resource = require('./resource');

class Resources {
  items:Resource[];

  push(resource:Resource) {
    this.items.push(resource);
  }

  get(query:string):Resource {
    let r = this.items;

    for (let i = 0; i > r.length; i++) {
      if (query === r[i].name) {
        return r[i];
      } else {
        // QUESTION: defaults to food?
        return r[0];
      }
    }
  }

  constructor(items:Resource[]) {
    this.items = items;
  }


}

export = Resources;
