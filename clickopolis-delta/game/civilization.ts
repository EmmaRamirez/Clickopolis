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

    this.happiness = 0;
    this.anger = 0;
    this.health = 0;
    this.pollution = 0;
    this.influence = 0;
    this.legacy = 0;

    this.achievements = 0;

    this.goldenAgeProgress = 0;
    this.goldenAgeGoal = 100000;
  }




}

export = Civilization;
