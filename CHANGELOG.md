# Changelog

### v0.1.11
[`6722242`](https://github.com/EmmaRamirez/Clickopolis/commit/6722242aee92d3219371e89387ab92b62d492f01) Change Ultimate Faith Tier cost from 1M to 100K

[`a3f5a55`](https://github.com/EmmaRamirez/Clickopolis/commit/a3f5a553f437ecf0b1f01f537ac8a84b12dbbda5) Add ability to purchase Faith Bonuses

[`f0e7e7f`](https://github.com/EmmaRamirez/Clickopolis/commit/f0e7e7f308d30bddcea094b43b9f3eb90be4e24e) Add functions to Faith Bonuses God of War, Fertility Goddess, and Protective Spirits

[`ab3962f`](https://github.com/EmmaRamirez/Clickopolis/commit/ab3962f620b7bb6a954c4e87444a1683af004f7b) [`7b13394`](https://github.com/EmmaRamirez/Clickopolis/commit/7b133948a7ba25d7f55dfb99af22e99ad3ce97f3) Added `AngerMod`, `happinessMod`, `strengthMod`, & `defenseMod` properties to Civilization

[`2763820`](https://github.com/EmmaRamirez/Clickopolis/commit/276382038b6f4c89279d01569698a5b75d659d12) Added `Artist` citizen class and `culture` + `culturePM` properties to Civilization

### v0.1.10
[`e4f4389`](https://github.com/EmmaRamirez/Clickopolis/commit/e4f4389aa8a566157c0accee25ccedf59f83d182) Adds Classical Wonders:
- Moai Statues
- The Great Wall
- The Great Colloseum
- Parthenon
- Also implements their respective functions

[`d6d3a7a`](https://github.com/EmmaRamirez/Clickopolis/commit/d6d3a7a3cfe26a641ccacef6fed2598083afbec1) **Bugfix**: `max` no longer appears inside boxes of food and prod when purchasing a Granary or Quarry.

### v0.1.9
[`548648a`](https://github.com/EmmaRamirez/Clickopolis/commit/548648a80bd5d212f6942e0853d5fd146a52882f) Added the `Faith` mechanic. This includes:
- `FaithBonus`, a type of bonus bought with faith Points
- A `Faith` screen, which lists these bonuses
- `FaithTier`s which determine the level and power of a `FaithBonus`
- New functions and styling to accommodate all of this

### v0.1.8
[`e285cac`](https://github.com/EmmaRamirez/Clickopolis/commit/e285cac12521e4ab478ab1a4a8270997686426b8) Changed the price of `Temple` from *45* to **70**. Changed the price of `Graveyard` from *70* to **30**.

[`c0dff1c`](https://github.com/EmmaRamirez/Clickopolis/commit/c0dff1cf21358762753fd581de40c10b352f43c2) Updated the Building design&mdash;now much prettier!

### v0.1.7
[`f818504`](https://github.com/EmmaRamirez/Clickopolis/commit/f818504a9076e8fb815ac45a8df5c43f81837d84) Added the Classical era Techs, included a _leads to_ section for each Tech. Added `The Wheel` Ancient era Tech, and added technology unlocking.

### v0.1.6
[`bfc37f0`](https://github.com/EmmaRamirez/Clickopolis/commit/bfc37f03e271d169a66102f6e430d977f147686d) Fixes [#30](https://github.com/EmmaRamirez/Clickopolis/issues/30) and [#33](https://github.com/EmmaRamirez/Clickopolis/issues/33). `Influence` split into `Domestic & International influences`. Added `immigration`, `emigration`, and `netMigration` properties. Added displaying `landPercent`. `Golden Age Points` and `Golden Ages` are now displayed as well.

[`d5b218d`](https://github.com/EmmaRamirez/Clickopolis/commit/d5b218d88782a579970ce73d2a678396d34bd55f) Fixed the `Utils.abbrNum` method to be more compliant with Typescript/ES6 standards, and to support K (thousand) through D (decillion). Also, k -> K, m -> M, etc.

### v0.1.5
[`0e639a6`](https://github.com/EmmaRamirez/Clickopolis/commit/0e639a6dcd17afbafd53303e8d06ab737d4dce3d) Changed the game version in start menu to 0.1.x, to reduce the amount of changes necessary while in alpha.

### v0.1.4
[`a4f4328`](https://github.com/EmmaRamirez/Clickopolis/commit/a4f4328a1dbb6b2820c50e8261168c134df1a2ea) Implemented a Queue data structure (not used anywhere).

### v0.1.3
[`dbb231b`](https://github.com/EmmaRamirez/Clickopolis/commit/dbb231b010038bd243bdc94373bb9800e214e77f) Edited the style of the `Resources` screen. It adds more visual cues, like red PC/PS when it's negative. It moves around some labels. And finally, adds new (unused) icons.

### v0.1.2
[`db73e7b`](https://github.com/EmmaRamirez/Clickopolis/commit/db73e7b1537e72a72facaac0ddabdb7494905292) Fixed where `The Great Pyramids` wonder was displayed as `enabled` by default.

[`bfacfa3`](https://github.com/EmmaRamirez/Clickopolis/commit/bfacfa38b0fef556875f392ad32a7657f4cc1082) Added the achievement screen&mdash;does not include anything up to this point.

[`776a8f3`](https://github.com/EmmaRamirez/Clickopolis/commit/776a8f32dec27db0780d7939f187807cd392d046) Added a _Clear Local Storage_ button to menu.

### v0.1.1
[`bfacfa3`](https://github.com/EmmaRamirez/Clickopolis/commit/bfacfa38b0fef556875f392ad32a7657f4cc1082) Achievements screen added with basic styling.

[`f1b2e7c`](https://github.com/EmmaRamirez/Clickopolis/commit/f1b2e7c98149baa047b5e97e1141f6682c5c21da) Style of production-wrapper in Buildings and employed-citizens in Citizens are similar to those in technology and legacy.

### v0.1.0
[`46b458d`](https://github.com/EmmaRamirez/Clickopolis/commit/46b458dd2653cbc485845b072116de67d19d496b) **Base Alpha**: See the [release notes](https://github.com/EmmaRamirez/Clickopolis/releases/tag/v0.1.0-alpha).
