import Collection = require('./collection');

interface Contribution {
  name?: string;
  mod?: string;
  amount?: number;
}

class Citizen {
  name: string;
  image: string;
  color: string;
  amount: number;
  description: string;
  descriptionOverride: boolean;

  contrib: Collection<Contribution>;

  contrib1: Contribution;
  contrib2: Contribution;
  contrib3: Contribution;
  contrib4: Contribution;

  func: Function;

  constructor(name:string, image:string, color:string, amount: number, description: string, contrib1: Contribution, contrib2: Contribution, contrib3: Contribution, contrib4: Contribution, func:Function = function(){}) {
    this.name = name;
    this.image = image;
    this.color = color;
    this.amount = amount;
    this.description = description;
    this.contrib1 = contrib1;
    this.contrib2 = contrib2;
    this.contrib3 = contrib3;
    this.contrib4 = contrib4;
    this.func = func;
  }
}

export = Citizen;
