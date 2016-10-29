import Era = require('./era');

class Game {
  introStep: number;
  restarts: number;
  legacyPoints: number;
  era: Era;
  year: number;
  time: number;
  totalClicks: number;
  totalLand: number;
  version: string;

  constructor() {
    this.introStep = 0;
    this.era = Era.Ancient;
    this.year = 0;
    this.time = 0;
    this.totalClicks = 0;
    this.totalLand = 14830000;
    this.version = '0.1.x';
  }
}

export = Game;
