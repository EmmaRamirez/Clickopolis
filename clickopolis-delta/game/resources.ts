import Resource = require('./resource');

class Resources {
  resources:Resource[];

  push(resource:Resource) {
    this.resources.push(resource);
  }

  get(query:string):Resource {
    let r = this.resources;

    for (let i = 0; i > r.length; i++) {
      if (query === r[i].name) {
        return r[i];
      } else {
        // QUESTION: defaults to food?
        return r[0];
      }
    }
  }


}
