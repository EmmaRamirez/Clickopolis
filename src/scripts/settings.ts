enum Detail {
  minimal,
  medium,
  maxiumum
}

class Settings {
  difficultyMode: string;
  detailLevel: Detail;
  skin: string;

  constructor(difficultyMode:string, skin:string) {
    this.difficultyMode = difficultyMode;
    this.skin = skin;
  }
}

export = Settings;
