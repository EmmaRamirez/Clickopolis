export interface SocialPolicy {
	name: string;
	category: string;
	description: string;
	cost: number;
	visible?: boolean;
	unlocked?: boolean;
	active?: boolean;
}

export function createSocialPolicy(options:SocialPolicy) {
	return {
		name: options.name,
		category: options.category,
		description: options.category,
		cost: options.category,
		visible: options.visible || true,
		unlocked: options.unlocked || false,
		active: options.active || false,
	}
}