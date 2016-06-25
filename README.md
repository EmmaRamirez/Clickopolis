# Clickopolis (WIP)
A clicking-based civilization game.

## Notes
*This game is still a work in progress, and as such things are bound to wildly change.*

Contributions through issues and pull requests are greatly appreciated!

## How to Run
Run `git clone https://github.com/EmmaRamirez/Clickopolis.git` to download the current repo.

Then navigate to `Clickopolis` then `npm install` and run `npm webpack`, `npm stylus`, and `npm start` in different tabs to run the game in your localhost (default port 8080).

In order to run the next version (read: experimental) of Clickopolis, just switch to the branch `next`, or check out one of the `feature/**` branches.

## Roadmap
*Latest*: 0.0.0

This Roadmap is a glance at planned releases of Clickopolis. It does not include patches and other minor fixes. For a complete list of all changes made to the game, see the [changelog](https://github.com/EmmaRamirez/Clickopolis/blob/master/CHANGELOG.md).


### 0.7.0 &mdash; Boom & Bust
- Implements ability to trade or sell `Great Works`
- Implements the Modern Era

### 0.6.0 &mdash; A New World
- Introduces the `land` mechanic
- Implements `Exploration`
- Implements the Industrial Era

### 0.5.0 &mdash; War & Peace
- Implements the `Military` screen
- Introduces War and Military Campaigns
- Implements the Enlightenment Era

### 0.4.0 &mdash; A Diplomatic Entanglement
- Implements `Diplomacy` and the `influence` mechanic
- Introduces new Nations
- Implements `Trade Routes` & `Trade Deals`
- Implements the Renaissance Era
- Implements `Events`

### 0.3.0 &mdash; The Faithful Many
- Implements `Faith` and `Faith Bonuses`
- Introduces the `Alpha` and `Omega` cults
  - New Alpha/Omega specific resources, techs, & upgrades
- Implements the Medieval Era

### 0.2.0 &mdash; An Empire of the Arts
- Implements `Culture`, `Cultural Upgrades`, and `Great Works.`
- Implements the Classical Era
  - New Technologies
  - New Buildings

### 0.1.0 &mdash; The Initial Game
- Implements the Base Game, which consists of the following:
  - Ability to create a Civilization!
  - Resources like gems and gold
  - Ability to employ your Citizens
  - A robust economy
  - The ability to build new buildings and Wonders
  - Technology, like Agriculture or Writing
  - History&mdash;keep a written record of your Empire
- Ability to save your game using `localStorage`



## Task List

### Settings
- [ ] debugMode
- [ ] Save Imports
- [ ] Save exports
- [ ] Access to previous era skins
- [ ] Audio on/off
- [ ] Ability to switch between UIs
  - [ ] Horizontal UI
  - [ ] Grid UI
- [ ] Ability to change UI color
  - [ ] Dark UI
  - [ ] Light UI

### Resources
- [ ] Resource UI
- [ ] Food Button click event
- [ ] Production Button click event
- [ ] Resource unlock/visibility implementation
- [ ] Resource Bonus Implementations
  - [ ] Health: fish, banana
  - [ ] Building: Stone, Iron
  - [ ] Strategic: Iron, uranium
  - [ ] Luxury: Gold, Gems
  - [ ] Power: Spaghetti, Chihuahuas
- [ ] Soil Fertility Algorithm
- [ ] Resource info display

### Civilization
- [ ] Civilization UI
- [ ] Population increase
- [ ] Happiness / anger
  - [ ] Effects from unhappiness
  - [ ] Revolt/revolution implementation
- [ ] Health / pollution
- [ ] influence
- [ ] Golden Ages
- [ ] Charts of metrics
- [ ] Larger view Civilization Summary

### Citizens
- [ ] Citizens UI
- [ ] Adding/Removing Citizens
- [ ] Types of Citizens
  - [ ] Farmers
  - [ ] Miners
  - [ ] Soldiers
  - [ ] Clerics
  - [ ] Artists
  - [ ] Scientists
  - [ ] Engineers

### Economy
- [ ] Economy UI
- [ ] Total Cash Reserve display
  - [ ] Breakdown
  - [ ] Trends Graph
- [ ] Trade Deal History
- [ ] Trade Routes
- [ ] Boom-bust Cycle Algorithm

### Buildings
- [ ] Buildings UI
- [ ] Building unlock, visibility, and Purchase
- [ ] Purchase/Build Mode
- [ ] Ancient Era Buildings
- [ ] Classical Era Buildings
- [ ] Great wonders
  - [ ] Timing Functions
  - [ ] Implementation & Bonuses

### Technology
- [ ] Technology UI
- [ ] Technology unlock, visibility, and purchase
- [ ] Technology implementations
  - [ ] Ancient era
  - [ ] Classical era

### Diplomacy
- [ ] Diplomacy UI
- [ ] Meet new nation function

### Military
- [ ] Military UI
- [ ] Military Assignments
- [ ] Combat
  - [ ] Peace
  - [ ] Attack
  - [ ] Defend
  - [ ] Pillage

### Culture
- [ ] Culture UI
- [ ] 7 Categories + 9 Tiers
- [ ] Culture generation
- [ ] Great Works

### Faith
- [ ] Faith UI

### Legacy
- [ ] Legacy UI

### Achievements
- [ ] Achievements UI

### Events
- [ ] Event creation
  - [ ] Plague event

### Documentation
- [ ] Guide outline
- [ ] Full Guide
