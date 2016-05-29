class Nation {
  name: string;
  image: number;
  color: string;
  description: string;
  influence: number;
  strength: number;
  defense: number;
  cash: number;
  peacefulness: number;
  isAtWar: boolean;

  constructor(name:string, image:number, color:string, description:string, influence:number, strength:number, defense:number, cash:number, peacefulness:number, isAtWar:boolean) {
    this.name = name;
    this.image = image;
    this.color = color;
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
