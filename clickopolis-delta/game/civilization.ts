class Civilization {
  civName: string;
  leaderName: string;

  location: string;

  happiness: number;
  anger: number;
  influence: number;

  conquestedCivs: Civilization[];

  constructor(civName:string, leaderName:string, location:string) {
    this.civName = civName;
    this.leaderName = leaderName;
    this.location = location;
  }

}

export = Civilization;
