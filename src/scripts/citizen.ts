class Citizen {
  name: string;
  image: string;
  amount: number;
  description: string;
  foodContribution: number;
  prodContribution: number;

  healthContribution: number;
  pollutionContribution: number;
  happinessContribution: number;
  angerContribution: number;

  scienceContribution: number;
  influenceContribution: number;

  func: Function;

  constructor(name:string, image:string, amount: number, description: string, foodContribution: number, prodContribution: number, func:Function = function(){}) {
    this.name = name;
    this.image = image;
    this.amount = amount;
    this.description = description;
    this.foodContribution = foodContribution;
    this.prodContribution = prodContribution;
    this.func = func;
  }
}

export = Citizen;
