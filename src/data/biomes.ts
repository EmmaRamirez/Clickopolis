import { IBiome } from '../classes';

const desert:IBiome = {
  name: 'desert',
  description: 'dry land'
};

const plains:IBiome = {
  name: 'plains',
  description: 'temperate, flat land'
}

export const biomes:IBiome[] = [
  desert,
  plains,
];
