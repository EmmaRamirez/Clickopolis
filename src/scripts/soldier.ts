export interface Soldier {
	name: string;
	plural: string;
	amount: number;
	enabled: boolean;
	baseStrength: number;
	baseDefense: number;
	unitType: string;
	//'land' | 'navy' | 'air' | 'nuclear';
	upkeep: number;
}