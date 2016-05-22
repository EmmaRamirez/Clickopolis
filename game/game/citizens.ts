import citizen = require('./citizen');

class Citizens {
  items:citizen[];

  push(citizen:citizen) {
    this.items.push(citizen);
  }

  get() {

  }
}

export = Citizens;
