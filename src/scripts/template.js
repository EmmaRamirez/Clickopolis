"use strict";
var Utils = require('./utils');
var u = new Utils();
var Templates = (function () {
    function Templates() {
        this.settingsScreen = "\n    <section class='clickopolis-intro'>\n      <img class='clickopolis-logo custom-size-img' src='img/clickopolis-logo.png'>\n      <p>Starting from the flames of the ancient world, you will progress steadily towards modernity&hellip;and beyond. You, the leader of a small faction of hunter-gatherers, have decided to settle\n        <select id=\"location\">\n          <option value=\"none\">select an option!</option>\n          <option value=\"coast\">by the Coast</option>\n          <option value=\"oasis\">in an Oasis</option>\n          <option value=\"forest\">in a Forest</option>\n          <option value=\"tundra\">in a Tundra</option>\n          <option value=\"iceberg\">on an Iceberg</option>\n        </select>\n      </p>\n      <p>Your name is <input type=\"text\" id=\"leaderName\" maxlength=\"10\" size=\"10\" placeholder=\"Jake\"> of <input type=\"text\" id=\"civName\" placeholder=\"Jaketopia\" maxlength=\"20\"></p>\n      <p>You are a(n)\n        <select id=\"trait\">\n          <option value=\"aggressive\">aggressive</option>\n          <option value=\"cosmpolitan\">cosmpolitan</option>\n          <option value=\"daring\">daring</option>\n          <option value=\"expansionist\">expansionist</option>\n          <option value=\"haughty\">haughty</option>\n          <option value=\"flirtatious\">flirtatious</option>\n          <option value=\"industrious\">industrious</option>\n          <option value=\"isolationist\">isolationist</option>\n          <option value=\"pacifistic\">pacifistic</option>\n          <option value=\"persuasive\">persuasive</option>\n        </select>\n       leader.</p>\n\n       <button class='begin-btn'>Begin Game!</button>\n\n    </section>\n  ";
    }
    Templates.prototype.createStartScreen = function (playerCiv, game) {
        var startScreen = "\n      <section class='clickopolis-intro'>\n        <h1><img class='clickopolis-logo custom-size-img' alt='Clickopolis' src='img/clickopolis-logo.png'></h1>\n        <div class=\"start-options\">\n          <button class=\"large-btn start-btn load-btn\">Load Game...</button>\n          <button class=\"large-btn start-btn new-btn\">New Game</button>\n          <button class=\"large-btn start-btn current-btn\">\n            <p class=\"current-game-heading\">Current Game: " + playerCiv.leaderName + " of " + playerCiv.civName + "</p>\n            <p class='center-text'>" + game.era + " era</p>\n            <p>\n              <span>\n                <img src=\"img/achievements.png\"> 5\n              </span>\n              <span>\n                <img src=\"img/strength.png\"> " + playerCiv.strength + "\n              </span>\n              <span>\n                <img src=\"img/defense.png\"> " + playerCiv.defense + "\n              </span>\n              <span>\n                <img src=\"img/legacy.png\"> 2\n              </span>\n              <span>\n                <img src=\"img/coin.png\"> 1K\n              </span>\n              <span>\n                <img src=\"img/wonder.png\"> 1\n              </span>\n            </p>\n          </button>\n        </div>\n        <!-- <button class='next-btn'>Next &rarr;</button> -->\n        <p class='center-text'>version " + game.version + "</p>\n      </section>\n    ";
        return startScreen;
    };
    ;
    Templates.prototype.createResourcesScreen = function (playerCiv, resources) {
        var resourcesScreen = "\n      <section class='screen resources-screen' id='resources'>\n        <h2><img src='img/resources.png'> Resources</h2>\n        <section class='resources-screen-inner'>\n          <div class='panel food-panel'>\n            <button class='food-btn'><img src='img/food-alt.png'> Grow Food</button>\n\n            <span class='resource-info r-food-pc' title='the amount of food you earn per click'>" + resources.get('food').perClick + " PC</span>\n            <span class='resource-info r-food-ps' title='the amount of food you earn per second'>" + resources.get('food').perSecond + " PS</span>\n            <span class='resource-info r-food-max'>" + resources.get('food').max + " max</span>\n            <span class='resource-info r-food-total'>" + resources.get('food').total + " total</span>\n\n          </div>\n          <div class='panel prod-panel'>\n            <button class='prod-btn'><img src='img/prod.png'> Create Production</button>\n\n            <span class='resource-info' title='the amount of production you make per click'>" + resources.get('prod').perClick + " PC</span>\n            <span class='resource-info' title='the amount of production you make per second'>" + resources.get('prod').perSecond + " PS</span>\n            <span class='resource-info'>" + resources.get('prod').max + " max</span>\n            <span class='resource-info r-prod-total'>" + resources.get('prod').total + " total</span>\n\n          </div>\n\n          <div class='panel location-panel'>\n            <p>Biome (" + playerCiv.location + ") Bonus: +10% <img src='img/food.png'> PC</p>\n            <p>Secondary Biome (" + playerCiv.location + ") Bonus: '????'</p>\n          </div>\n\n\n          <div class='panel resources-panel'>\n            <span class='resource'>\n              <img src='img/health.png'> Health\n            </span>\n\n            <span class='resource' data-resource='fish'>\n              <img src='img/fish.png'> <span>" + resources.get('fish').total + "</span>\n            </span>\n\n            <span class='resource' data-resource='banana'>\n              <img src='img/banana.png'> <span>" + resources.get('banana').total + "</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/buildings.png'> Building\n            </span>\n\n            <span class='resource' data-resource='stone'>\n              <img src='img/stone.png'> <span>" + resources.get('stone').total + "</span>\n            </span>\n\n            <span class='resource' data-resource='iron'>\n              <img src='img/iron.png'> <span>" + resources.get('iron').total + "</span>\n            </span>\n\n\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/cavalry.png'> Strategic\n            </span>\n\n            <span class='resource' data-resource='horse'>\n              <img src='img/horse.png'> <span>" + resources.get('horse').total + "</span>\n            </span>\n\n            <span class='resource' data-unlocked='false' data-resource='oil'>\n              <img src='img/oil.png'> <span>" + resources.get('oil').total + "</span>\n            </span>\n\n            <span class='resource' data-resource='uranium'>\n              <img src='img/uranium.png'> <span>" + resources.get('uranium').total + "</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/crown.png'> Luxury\n            </span>\n\n            <span class='resource' data-resource='spices'>\n              <img src='img/spices.png'> <span>" + resources.get('spices').total + "</span>\n            </span>\n\n            <span class='resource' data-resource='gold'>\n              <img src='img/gold.png'> <span>" + resources.get('gold').total + "</span>\n            </span>\n\n            <span class='resource' data-resource='gems'>\n              <img src='img/gems.png'> <span>" + resources.get('gems').total + "</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/illuminati.png'> Power\n            </span>\n\n            <span class='resource' data-resource='spaghetti'>\n              <img src='img/spaghetti.png'> <span>" + resources.get('spaghetti').total + "</span>\n            </span>\n\n            <span class='resource' data-resource='chihuahua'>\n              <img src='img/chihuahua.png'> <span>" + resources.get('chihuahua').total + "</span>\n            </span>\n\n          </div>\n\n\n\n        </section>\n        <br>\n        <section class='resource-screen-inner resource-info-screen'>\n          <p>Click on a resource to recieve more information on it!</p>\n        </section>\n      </section>\n    ";
        return resourcesScreen;
    };
    Templates.prototype.createScreenHeader = function (playerCiv, game) {
        var screenHeader = "\n      <header class='screen-header'>\n        <h1>Clickopolis</h1>\n        <h2>" + playerCiv.leaderName + " of " + playerCiv.civName + " &mdash; " + game.era + " era &mdash; <span class='game-year-text'>" + game.year + "</span> AC</h2>\n      </header>\n    ";
        return screenHeader;
    };
    Templates.prototype.createCitizenScreen = function (playerCiv, citizens) {
        var citizensScreen = "\n      <section class='screen citizens-screen' id='citizens'>\n        <h2><img src='img/citizens.png'> Citizens</h2>\n        <section class='citizens-screen-inner'>\n          <p class='center-text'>Each citizen produces 1 <img src='img/coin.png'>, 2 <img src='img/research.png'>, 1 <img src='img/angry.png'>, and 1 <img src='img/pollution.png'></p>\n          <p class='center-text'>Each citizen also consumes 1 <img src='img/food.png'> PS</p>\n          <div class='row citizen-farmer'>\n            <button data-citizen='farmer' data-citizen-amount=-1>-1</button>\n            <span class='citizen-icon'><img src='img/farmer.png'></span>\n            <button data-citizen='farmer' data-citizen-amount=1>+1</button>\n            <span class='citizen-info'>\n              Farmers: <strong class='farmer-num-text'>" + citizens.get('farmer').amount + "</strong> | Farmers provide +1 <img src='img/food.png'> PC and +.2 PC.\n            </span>\n          </div>\n          <div class='row citizen-miner'>\n            <button data-citizen='miner' data-citizen-amount='-1'>-1</button>\n            <span class='citizen-icon'><img src='img/miner.png'></span>\n            <button data-citizen='miner' data-citizen-amount='1'>+1</button>\n            <span class='citizen-info'>\n              Miners: <strong class='miner-num-text'>0</strong> | Miners provide +1 <img src='img/prod.png'> PC and +.2 PC.\n            </span>\n          </div>\n          <div class='row citizen-soldier'>\n            <button data-citizen-amount='-1'>-1</button>\n            <span class='citizen-icon'><img src='img/soldier-alt.png'></span>\n            <button data-citizen-amount='1'>+1</button>\n            <span class='citizen-info'>\n              Soldiers: <strong class='soldier-num-text'>0</strong> | Soldiers defend and fight for your empire. -3 <img src='img/coin.png'>\n            </span>\n          </div>\n        </section>\n      </section>\n    ";
        return citizensScreen;
    };
    Templates.prototype.createCivilizationScreen = function (playerCiv) {
        var civilizationScreen = "\n      <section class='screen civilization-screen' id='civilization'>\n        <h2><img src='img/empire.png'> Civilization</h2>\n        <section class='civilization-screen-inner'>\n          <div class='panel population-panel'>\n            <button class='pop-btn'>+1 Population (<img src='img/food.png'> <span class='pop-growth-cost'>" + playerCiv.populationGrowthCost + "</span>)</button>\n            <span class='civ-metric metric-population' title='" + (playerCiv.populationReal + ' people') + "'>Population: <img src='img/citizen.png'> <span class='population-text'>" + playerCiv.population + "</span></span>\n          </div>\n          <div class='panel civ-metric-panel'>\n            <span class='civ-metric metric-happiness'>\n              <img src='img/happy.png'> " + playerCiv.happiness + "\n            </span>\n            <span class='civ-metric metric-anger'>\n              <img src='img/angry.png'> <span class='civ-anger-text'>" + playerCiv.anger + "</span>\n            </span>\n            <span class='civ-metric metric-health'>\n              <img src='img/health.png'> " + playerCiv.health + "\n            </span>\n            <span class='civ-metric metric-pollution'>\n              <img src='img/pollution.png'> <span class='civ-pollution-text'>" + playerCiv.pollution + "</span>\n            </span>\n            <span class='civ-metric metric-influence'>\n              <img class='influence-img' src='img/influence.png'> " + playerCiv.influence + "\n            </span>\n            <span class='civ-metric metric-golden-age' title='Golden age points trigger Golden Ages. Points are earned by your happiness, minus anger.'>\n              <img src='img/golden-age.png'> Golden Age Points <span class='golden-age-progress'>" + playerCiv.goldenAgeProgress + "</span> / <span class='golden-age-goal'>" + u.abbrNum(playerCiv.goldenAgeGoal, 2) + "</span>\n            </span>\n          </div>\n        </section>\n        <section class='civilization-screen-inner'>\n          <h3>Civilization Overview</h3>\n        </section>\n      </section>\n    ";
        return civilizationScreen;
    };
    Templates.prototype.createEconomyScreen = function (playerCiv) {
        var economyScreen = "\n      <section class='screen economy-screen' id='economy'>\n        <h2><img src='img/money.png'> Economy</h2>\n        <section class='economy-screen-inner'>\n          <div class='total-cash'>\n            <img src='img/coin.png'> <span class='cash-text'>" + playerCiv.cash + "</span>\n          </div>\n          <span class='cash-breakdown'>\n            <span class='cash-item'>From Citizens: <span class='cash-from-citizens'>0</span></span>\n            <span class='cash-item'>From Trade Routes: <span class='cash-from-routes'>0</span></span>\n            <span class='cash-item'>From Buildings: <span class='cash-from-buildings'>0</span></span>\n            <span class='cash-item'>From Military: <span class='cash-from-military'>0</span></span>\n            <span class='cash-item cash-item-total'>Per Minute: <span class='cash-PM'>" + playerCiv.cashPM + "</span></span>\n          </span>\n          <div class='trade-deal-history'>\n            <table>\n              <tr>\n                <td colspan='4'><img src='img/trade-deal.png'> Trade Deal History</td>\n              </tr>\n              <tr>\n                <td>Nation</td>\n                <td>Gave...</td>\n                <td>For...</td>\n                <td>Year</td>\n              </tr>\n              <tr>\n                <td>Ulonia</td>\n                <td>10 <img src='img/horse.png'></td>\n                <td>5 <img src='img/gold.png'></td>\n                <td>25 AC</td>\n              </tr>\n            </table>\n\n\n          </div>\n        </section>\n      </section>\n    ";
        return economyScreen;
    };
    Templates.prototype.createBuildingsScreen = function () {
        var buildingsScreen = "\n      <section class='screen buildings-screen' id='buildings'>\n        <h2><img src='img/buildings.png'> Buildings</h2>\n        <section class='buildings-screen-inner'>\n          <div class='panel buildings-mode'>\n            <button class='purchase-mode-btn hidden'>Purchase Mode</button>\n          </div>\n        </section>\n        <section class='buildings-screen-inner'>\n          <div class='building'>\n            <span class='building-total' title='how many you own'>0</span>\n            <span class='building-cost'><span class='building-cost-text'>15</span> <img src='img/prod.png'></span>\n            <span class='building-name'>Hut</span>\n            <span class='building-description'>A simple hut. Could use air conditioning.</span>\n            <span class='building-effect'>+1 <img src='img/happy.png'></span>\n          </div>\n          <div class='building'>\n            <span class='building-total' title='how many you own'>0</span>\n            <span class='building-cost'><span class='building-cost-text'>25</span> <img src='img/prod.png'></span>\n            <span class='building-name'>Granary</span>\n            <span class='building-description'>A granary for storing food.</span>\n            <span class='building-effect'>+200 <img src='img/food.png'> Max</span>\n          </div>\n        </section>\n      </section>\n    ";
        return buildingsScreen;
    };
    Templates.prototype.createTechnologyScreen = function (playerCiv) {
        var technologyScreen = "\n      <section class='screen technology-screen' id='technology'>\n        <h2><img src='img/research.png'> Technology</h2>\n        <section class='technology-screen-inner'>\n          <div class='center-text current-research'>Currently researching towards: <span class='researching-techs'>" + playerCiv.researchingTechs + "</span></div>\n          <div class='center-text research-exceeding'></div>\n          <span class='research-text r-text'>" + playerCiv.research + "</span>\n          <div class='research-progress-bar'></div>\n          <span class='research-cost-text r-text'>" + playerCiv.researchCost + "</span>\n        </section>\n        <section class='technology-screen-inner search'>\n          <input type='search' placeholder='filter...'>\n          <span class='research-filters'>\n            <label><input type='checkbox'>Show Unavailable Techs</label><br>\n            <label><input type='checkbox'>Show Purchased Techs</label>\n          </span>\n        </section>\n        <section class='technology-screen-inner technologies'>\n          <span style='color:white;' class='center-text'>Press Ctrl + Click to deselect a tech.</span>\n        </section>\n      </section>\n    ";
        return technologyScreen;
    };
    Templates.prototype.createDiplomacyScreen = function (playerCiv) {
        var diplomacyScreen = "\n    <section class='screen diplomacy-screen' id='diplomacy'>\n      <h2>\n        <img src='img/deal.png'> Diplomacy\n      </h2>\n      <section class='diplomacy-screen-inner'>\n        <div class='diplomacy-summary'>\n          Nations Met: <span class='nations-met-text'>25</span> &lozf;\n          Nations Destroyed: <span class='nations-destroyed-text'>0</span> &lozf;\n          Nations Absorbed: <span class='nations-absorbed-text'>0</span>\n        </div>\n      </section>\n      <section class='diplomacy-screen-inner'>\n        <div class='nation'>\n          <div class='nation-header'>\n            <div class='nation-name'>Entropia</div>\n            <img class='nation-img' src='img/empire-4.png'>\n            <button class='nation-interact-btn'>Interact</button>\n          </div>\n          <div class='nation-profile'>\n            <p class='nation-description'>\n              A technologically advanced nation ocuppied by religious exiles.\n            </p>\n            <div class='nation-metrics'>\n              <img src='img/influence.png'> <span class='nation-influence-text'>12</span>\n              <img src='img/strength.png'> <span class='nation-strength-text'>33</span>\n              <img src='img/defense.png'> <span class='nation-defense-text'>23</span>\n              <img src='img/coin.png'> <span class='nation-cash-text'>1.5K</span>\n            </div>\n          </div>\n        </div>\n\n        <div class='nation'>\n          <div class='nation-header' style='background: #6CDBE0;'>\n            <div class='nation-name'>Arcopolis</div>\n            <img class='nation-img' src='img/empire-8.png'>\n            <button class='nation-interact-btn'>Interact</button>\n          </div>\n          <div class='nation-profile'>\n            <p class='nation-description'>\n              A seafaring nation prone to violence.\n            </p>\n            <div class='nation-metrics'>\n              <img src='img/influence-alt.png'> <span class='nation-influence-text'>-4</span>\n              <img src='img/strength.png'> <span class='nation-strength-text'>55</span>\n              <img src='img/defense.png'> <span class='nation-defense-text'>68</span>\n              <img src='img/coin.png'> <span class='nation-cash-text'>3.7K</span>\n            </div>\n          </div>\n        </div>\n      </section>\n    </section>\n    ";
        return diplomacyScreen;
    };
    Templates.prototype.createMilitaryScreen = function (playerCiv) {
        var militaryScreen = "\n      <section class='screen military-screen' id='military'>\n        <h2>\n          <img src='img/military.png'> Military\n        </h2>\n        <section class='military-screen-inner'>\n          <span class='military-strength military-metric'><img src='img/strength.png'> Strength: <span class='military-strenght-text'>" + playerCiv.strength + "</span></span>\n          <span class='military-defense military-metric'><img src='img/defense.png'> Defense: <span class='military-defense-text'>" + playerCiv.defense + "</span></span>\n          <span class='military-soldiers military-metric'><img src='img/soldier.png'> Soldiers: <span class='military-soldiers-text'>0</span></span>\n        </section>\n        <section class='military-screen-inner'>\n          <h3>Soldier Assignments</h3>\n        </section>\n        <section class='military-screen-inner'>\n          <h3>Military Bases</h3>\n        </section>\n        <section class='military-screen-inner'>\n          <h3>Military Operations</h3>\n        </section>\n      </section>\n    ";
        return militaryScreen;
    };
    Templates.prototype.createCultureScreen = function (playerCiv) {
        var cultureScreen = "\n      <section class='screen culture-screen' id='culture'>\n        <h2>\n          <img src='img/culture.png'> Culture\n        </h2>\n        <section class='culture-screen-inner'>\n\n        </section>\n      </section>\n    ";
        return cultureScreen;
    };
    Templates.prototype.createFaithScreen = function (playerCiv) {
        var faithScreen = "\n      <section class='screen faith-screen' id='faith'>\n        <h2>\n          <img src='img/faith-alt.png'> Faith\n        </h2>\n        <section class='faith-screen-inner'>\n\n        </section>\n      </section>\n    ";
        return faithScreen;
    };
    Templates.prototype.createSettingsScreen = function (playerCiv, game) {
        var settingsScreen = "\n      <section class='screen settings-screen' id='settings'>\n        <h2>\n          <img src='img/gear.png'> Settings\n        </h2>\n        <section class='settings-screen-inner'>\n          <p><span class='settings-label'>Game Skin:</span>\n            <span class='ui-button ancient era-skin'>Ancient</span>\n            <span class='ui-button classical era-skin'>Classical</span>\n            <span class='ui-button medieval era-skin'>Medieval</span>\n          </p>\n          <p><span class='settings-label'>UI:</span>\n            <span class='ui-button vertical-button'><img src='img/vertical.png' title='vertical'></span>\n            <span class='ui-button grid-button'><img src='img/grid.png' title='grid'></span>\n          </p>\n        </section>\n      </section>\n    ";
        return settingsScreen;
    };
    return Templates;
}());
module.exports = Templates;
//# sourceMappingURL=template.js.map