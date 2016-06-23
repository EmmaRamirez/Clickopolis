class Collection {
  name:string;
  items:any[];

  push(item:any):void {
    this.items.push(item);
  }

  get(query:string):any {
    let items = this.items;
    let item:any;

    for (let i = 0; i < items.length; i++) {
      if (items[i].name === query) {
        item = items[i];
      }
    }
    return item;
  }

  constructor(name: string, items: any[]) {
    this.name = name;
    this.items = items;
  }

}

export = Collection;
