class Citizen {
  name: string;
  image: string;
  description: string;
  foodContribution: number;
  prodContribution: number;

  healthContribution: number;
  happinessContribution: number;

  scienceContribution: number;
  influenceContribution: number;

  constructor(name:string, image:string, description: string, foodContribution: number, prodContribution: number) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.foodContribution = foodContribution;
    this.prodContribution = prodContribution;
  }
}

export = Citizen;
