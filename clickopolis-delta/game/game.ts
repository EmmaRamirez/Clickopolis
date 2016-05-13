class Game {
  introStep: number;
  restarts: number;
  legacyPoints: number;
  era: string;

  constructor(introStep: number) {
    this.introStep = introStep;
  }
}

export = Game;
