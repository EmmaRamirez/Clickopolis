export interface IResource {
  name: string;
  plural: string;
  perClick: number;
  perSecond: number;
  max: number;
  total: number;
  image: string;
  description: string;

  unlocked: boolean;
  visible: boolean;

  foodBonus?: number;
  prodBonus?: number;
  foodBonusPS?: number;
  prodBonusPS?: number;
  happinessBonus?: number;
  healthBonus?: number;
  pollutionBonus?: number;
  influenceBonus?: number;
  faithBonus?: number;

  exchangeRate?: number;
}
