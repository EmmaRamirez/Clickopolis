
export type BiomeType = 'Desert' | 'Tundra' | 'Island' | 'Coast' | 'Plains' | 'Forest' | 'Mountains' | '';

export class Biome {
  name: BiomeType;
  description: string;

  constructor(name: BiomeType) {
    this.name = name;
  }
}

export class IBiome {
  name: BiomeType;
  description: string;
}
