import Collection = require('./collection');

export interface Contribution {
  name?: string;
  mod?: string;
  amount?: number;
}

export class Citizen {
  name: string;
  image: string;
  color: string;
  amount: number;
  description: string;
  visible: boolean;
  enabled: boolean;
  descriptionOverride: boolean;

  contrib: Collection<Contribution>;

  contrib1: Contribution;
  contrib2: Contribution;
  contrib3: Contribution;
  contrib4: Contribution;

  constructor(name:string, image:string, color:string, amount: number, description: string, contrib1: Contribution, contrib2: Contribution, contrib3: Contribution, contrib4: Contribution, visible: boolean = true, enabled: boolean = false) {
    this.name = name;
    this.image = image;
    this.color = color;
    this.amount = amount;
    this.description = description;
    this.contrib1 = contrib1;
    this.contrib2 = contrib2;
    this.contrib3 = contrib3;
    this.contrib4 = contrib4;
    this.visible = visible;
    this.enabled = enabled;
  }
}

