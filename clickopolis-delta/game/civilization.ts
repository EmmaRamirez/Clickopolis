class Civilization {
  civName: string;

  leaderName: string;
  leaderTraits: string[];
  leaderTraitsMax: number;

  location: string;

  happiness: number;
  anger: number;
  health: number;
  pollution: number;
  influence: number;
  legacy: number;

  population: number;
  populationGrowthCost: number;
  populationReal: number;

  achievements: number;

  goldenAges: number;
  goldenAgeProgress: number;
  goldenAgeGoal: number;
  goldenAgeMult: number;

  conquestedCivs: Civilization[];

  constructor(civName:string, leaderName:string, location:string) {
    this.civName = civName;
    this.leaderName = leaderName;
    this.location = location;

    this.leaderTraits = [];
    this.leaderTraitsMax = 3;

    this.happiness = 15;
    this.anger = 1;
    this.health = 25;
    this.pollution = 1;
    this.influence = 0;
    this.legacy = 0;

    this.achievements = 0;

    this.goldenAgeProgress = 0;
    this.goldenAgeGoal = 100000;

    this.population = 1;
    this.populationGrowthCost = 10;
    this.populationReal = 1000;
  }




}

export = Civilization;
