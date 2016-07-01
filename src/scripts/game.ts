
enum Era {
  Ancient,
  Classical,
  Medieval,
  Renaissance,
  Enlightenment,
  Industrial,
  Modern,
  Atomic,
  Information,
  Future
}

class Game {
  introStep: number;
  restarts: number;
  legacyPoints: number;
  era: Era;
  year: number;
  time: number;
  totalLand: number;
  version: string;

  constructor(introStep: number) {
    this.introStep = introStep;
    this.era = Era.Ancient;
    this.year = 0;
    this.time = 0;
    this.totalLand = 14830000;
    this.version = '0.0.1';
  }
}

export = Game;
