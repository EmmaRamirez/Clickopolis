# Clickopolis (WIP)
A clicking-based civilization game.

## Notes
This game is still a work in progress, and as such things are bound to wildly change.

To run, just navigate to `clickopolis-delta` then `npm install` and then type `http-server` in the command line.

Clickopolis-delta is the current working version of the game (written in Typescript :]).

## Roadmap


- [ ] Test


- Documentation
  - [] Guide outline
  - [] Full Guide
- Settings
  - [] debugMode
  - [] Save Import/exports
  - [] Access to previous era skins
- Resources
  - [] Soil Fertility Algorithm
  - Resource unlock
  - Food / Production PS, PC, Max, & Total
  - health: fish, banana
  - strategic: horse, iron, uranium
  - building: stone, iron, oil, uranium
  - luxury: gold, gems, spaghetti
- Technology
  - Technology unlock
  - Technology implementations
- Buildings
  - Purchase mode
  - Production cost modifiers
  - Misc costs
  - Implementations
  - Great wonders
    - timing function (find more efficient model)
    - implementations & bonuses
- Economy
  - [] BoomBust Cycle Algorithm
  - [] Trade System implementation
- Eras
  - era implementations
  - era bonuses
  - era skins
- Golden Ages
  - Golden Age set-up
  - Golden Age bonuses
    - x10 food PS, food PC, prod PS, prod PC
    - x10 faith with upgrades
    - x10 culture with upgrades
    - x10 science with upgrades
    - x10 money with upgrades
  - Golden Age length & modifiers
- Faith
  - Faith bonuses implementation
    - 4 Cateogires (Pantheon, Belief, Dogma, Holiest Powers)
  - Faith generation
- Culture
  - Culture bonuses implementation
    - 7 Categories (Resources, Economy, Culture, Faith, Military, Diplomacy, Tech)
    - 9 Tiers (for each Era)
  - Culture generation
    - Great Works
      - great work generation / by generation
      - great work culture/cash increases
      - great works trade with other nations
- Military
  - Soldier Assembly, Assignment
  - Combat
    - Peace
    - Attack
    - Defend
    - Pillage
  - Military Contracts
- Diplomacy
  - Meet New Nation function
    - split by Era
  - Should they be generated randomly or preset?
  - United Nations (or similar name)
- Save Import / Export into text file
  - Compression
- LocalStorage get/set
  - Compression
