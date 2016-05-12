class Settings {
  difficultyMode: string;
  skin: string;

  constructor(difficultyMode:string, skin:string) {
    this.difficultyMode = difficultyMode;
    this.skin = skin;
  }
}

export = Settings;
