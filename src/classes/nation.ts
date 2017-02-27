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
  timesInteracted: number;

  constructor(name:string, image:number, color:string, description:string, influence:number, strength:number, defense:number, cash:number, peacefulness:number, isAtWar:boolean, timesInteracted:number = 0) {
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
    this.timesInteracted = timesInteracted;
  }

}

export = Nation;
