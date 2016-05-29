import Nation = require('./nation');

class Nations {
  items: Nation[];

  get() {

  }

  constructor(items:Nation[]) {
    this.items = items;
  }
}

export = Nations;
