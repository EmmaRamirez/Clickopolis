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
  }




}

export = Civilization;
