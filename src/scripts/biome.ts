enum BiomeTypes {
  Desert = <any>"Desert",
  Jungle = <any>"Jungle",
  Forest = <any>"Forest",
  Island = <any>"Island",
  Coast = <any>"Coast",
  Mountain = <any>"Mountain",
  Tundra = <any>"Tundra",
  Glacier = <any>"Glacier"
}

interface Biome {
  name: BiomeTypes;
  description: string;
}

export = Biome;
