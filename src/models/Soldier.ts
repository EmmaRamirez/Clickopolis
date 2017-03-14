export type SoldierType = 'land' | 'navy' | 'air' | 'nuclear';

export interface Soldier {
	name: string;
	plural: string;
	amount: number;
	enabled: boolean;
	baseStrength: number;
	baseDefense: number;
	type: SoldierType;
	upkeep: number;
}
