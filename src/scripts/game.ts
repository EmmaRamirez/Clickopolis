class Game {
  introStep: number;
  restarts: number;
  legacyPoints: number;
  era: string;
  year: number;
  time: number;
  version: string;

  constructor(introStep: number) {
    this.introStep = introStep;
    this.era = 'ancient';
    this.year = 0;
    this.time = 0;
    this.version = '0.0.1';
  }
}

export = Game;
