class Game {
  introStep: number;
  restarts: number;
  legacyPoints: number;
  era: string;
  year: number;
  time: number;

  constructor(introStep: number) {
    this.introStep = introStep;
    this.era = 'ancient';
    this.year = 0;
    this.time = 0;
  }
}

export = Game;
