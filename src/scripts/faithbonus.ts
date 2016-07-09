import FaithTier = require('./faithtier');

class FaithBonus {
  name: string;
  tier: FaithTier;
  enabled: boolean;
  purchased: boolean;
  effect: string;
  func: Function;

  constructor(name: string, tier: FaithTier, enabled: boolean, purchased: boolean, effect: string, func: Function ) {
    this.name = name;
    this.tier = tier;
    this.enabled = enabled;
    this.purchased = purchased;
    this.effect = effect;
    this.func = func;
  }
}

export = FaithBonus;
