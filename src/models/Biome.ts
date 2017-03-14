export type BiomeType = 'Desert' | 'Tundra' | 'Island' | 'Coast' | 'Plains' | 'Forest' | 'Mountains' | '';

export interface Biome {
  name: BiomeType;
  description: string;
}
