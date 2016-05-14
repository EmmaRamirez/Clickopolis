class Civilization {
  civName: string;

  leaderName: string;
  leaderTraits: string[];
  leaderTraitsMax: number;

  location: string;

  happiness: number;
  anger: number;
  influence: number;
  legacy: number;

  achievements: number;

  goldenAges: number;
  goldenAgeProgess: number;
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
    this.influence = 0;
    this.legacy = 0;

    this.achievements = 0;
  }




}

export = Civilization;
