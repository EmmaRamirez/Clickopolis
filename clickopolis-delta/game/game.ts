class Game {
  introStep: number;
  restarts: number;
  legacyPoints: number;
  era: string;
  year: number;

  constructor(introStep: number) {
    this.introStep = introStep;
    this.era = 'ancient';
    this.year = 0;
  }
}

export = Game;
