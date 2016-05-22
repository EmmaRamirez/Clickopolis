class Nation {
  name: string;
  image: number;
  description: string;
  influence: number;
  strength: number;
  defense: number;
  cash: number;
  peacefulness: number;
  isAtWar: boolean;

  constructor(name:string, image:number, description:string, influence:number, strength:number, defense:number, cash:number, peacefulness:number, isAtWar:boolean) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.influence = influence;
    this.strength = strength;
    this.defense = defense;
    this.cash = cash;
    this.peacefulness = peacefulness;
    this.isAtWar = isAtWar;
  }

}

export = Nation;
