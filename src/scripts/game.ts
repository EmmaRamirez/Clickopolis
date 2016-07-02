
//type Era = 'Ancient' | 'Classical' | 'Medieval' | 'Renaissance' | 'Enlightenment' | 'Industrial' | 'Modern' | 'Atomic' | 'Information' | 'Future';

enum Era {
  Ancient = <any>'Ancient',
  Classical = <any>'Classical',
  Medieval = <any>'Medieval',
  Renaissance = <any>'Renaissance'
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
    this.version = '0.1.0';
  }
}

export = Game;
