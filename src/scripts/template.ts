import Game = require('./game');
import Civilization = require('./civilization');
import Resource = require('./resource');
import Citizen = require('./citizen');
import Collection = require('./collection');
import Utils = require('./utils');

let u = new Utils();

class Templates {

  createStartScreen(playerCiv:Civilization, game:Game) {

    let startScreen = `
      <section class='clickopolis-intro'>
        <h1><img class='clickopolis-logo custom-size-img' alt='Clickopolis' src='img/clickopolis-logo.png'></h1>
        <div class="start-options">
          <button class="large-btn start-btn load-btn">Load Game...</button>
          <button class="large-btn start-btn new-btn">New Game</button>
          <button class="large-btn start-btn current-btn">
            <p class="current-game-heading">Current Game: ${playerCiv.leaderName} of ${playerCiv.civName}</p>
            <p class='center-text'>${game.era} era</p>
            <p>
              <span>
                <img src="img/achievements.png"> ${playerCiv.achievements}
              </span>
              <span>
                <img src="img/strength.png"> ${playerCiv.strength}
              </span>
              <span>
                <img src="img/defense.png"> ${playerCiv.defense}
              </span>
              <span>
                <img src="img/legacy.png"> ${playerCiv.legacy}
              </span>
              <span>
                <img src="img/coin.png"> ${playerCiv.cash}
              </span>
              <span>
                <img src="img/wonder.png"> ${playerCiv.wondersBuilt}
              </span>
            </p>
          </button>
        </div>
        <!-- <button class='next-btn'>Next &rarr;</button> -->
        <p class='center-text'>version ${game.version}</p>
      </section>
    `;
    return startScreen;
  };

  settingsScreen:string = `
    <section class='clickopolis-intro'>
      <img class='clickopolis-logo custom-size-img' src='img/clickopolis-logo.png'>
      <p>Starting from the flames of the ancient world, you will progress steadily towards modernity&hellip;and beyond. You, the leader of a small faction of hunter-gatherers, have decided to settle
        <select id="location">
          <option value="none">select an option!</option>
          <option value="coast">by the Coast</option>
          <option value="oasis">in an Oasis</option>
          <option value="forest">in a Forest</option>
          <option value="tundra">in a Tundra</option>
          <option value="iceberg">on an Iceberg</option>
        </select>
      </p>
      <p>Your name is <input type="text" id="leaderName" maxlength="10" size="10" placeholder="Jake"> of <input type="text" id="civName" placeholder="Jaketopia" maxlength="20"></p>
      <p>You are a(n)
        <select id="trait">
          <option value="aggressive">aggressive</option>
          <option value="cosmpolitan">cosmpolitan</option>
          <option value="daring">daring</option>
          <option value="expansionist">expansionist</option>
          <option value="haughty">haughty</option>
          <option value="flirtatious">flirtatious</option>
          <option value="industrious">industrious</option>
          <option value="isolationist">isolationist</option>
          <option value="pacifistic">pacifistic</option>
          <option value="persuasive">persuasive</option>
        </select>
       leader.</p>

       <button class='begin-btn'>Begin Game!</button>

    </section>
  `;

  createResourcesScreen(playerCiv:Civilization, resources:Collection) {
    let resourcesScreen = `
      <section class='screen resources-screen' id='resources'>
        <h2><img src='img/resources.png'> Resources</h2>
        <section class='resources-screen-inner'>
          <div class='panel food-panel'>
            <button class='food-btn'><img src='img/food-alt.png'> Grow Food</button>

            <span class='resource-info r-food-pc' title='the amount of food you earn per click'>${resources.get('food').perClick} PC</span>
            <span class='resource-info r-food-ps' title='the amount of food you earn per second'>${resources.get('food').perSecond} PS</span>
            <span class='resource-info r-food-max'>${resources.get('food').max} max</span>
            <span class='resource-info r-food-total'>${resources.get('food').total} total</span>

          </div>
          <div class='panel prod-panel'>
            <button class='prod-btn'><img src='img/prod.png'> Create Production</button>

            <span class='resource-info r-prod-pc' title='the amount of production you make per click'>${resources.get('prod').perClick} PC</span>
            <span class='resource-info r-prod-ps' title='the amount of production you make per second'>${resources.get('prod').perSecond} PS</span>
            <span class='resource-info r-prod-max'>${resources.get('prod').max} max</span>
            <span class='resource-info r-prod-total'>${resources.get('prod').total} total</span>

          </div>

          <div class='panel location-panel'>
            <p>Biome (${playerCiv.location}) Bonus: +10% <img src='img/food.png'> PC</p>
          </div>


          <div class='panel resources-panel'>
            <span class='resource health-resources'>
              <img src='img/health.png'> Health
            </span>

            <span class='resource' data-resource='fish'>
              <img src='img/fish.png'> <span>${resources.get('fish').total}</span>
            </span>

            <span class='resource' data-resource='banana'>
              <img src='img/banana.png'> <span>${resources.get('banana').total}</span>
            </span>

            <br>

            <span class='resource building-resources'>
              <img src='img/buildings.png'> Building
            </span>

            <span class='resource' data-resource='stone'>
              <img src='img/stone.png'> <span>${resources.get('stone').total}</span>
            </span>

            <span class='resource' data-unlocked='${resources.get('iron').unlocked}' data-resource='iron'>
              <img src='img/iron.png'> <span>${resources.get('iron').total}</span>
            </span>



            <br>

            <span class='resource strategic-resources'>
              <img src='img/cavalry.png'> Strategic
            </span>

            <span class='resource' data-unlocked='${resources.get('horse').unlocked}' data-resource='horse'>
              <img src='img/horse.png'> <span>${resources.get('horse').total}</span>
            </span>

            <span class='resource' data-unlocked='${resources.get('oil').unlocked}' data-resource='oil'>
              <img src='img/oil.png'> <span>${resources.get('oil').total}</span>
            </span>

            <span class='resource' data-unlocked='${resources.get('uranium').unlocked}' data-resource='uranium'>
              <img src='img/uranium.png'> <span>${resources.get('uranium').total}</span>
            </span>

            <br>

            <span class='resource luxury-resources'>
              <img src='img/crown.png'> Luxury
            </span>

            <span class='resource' data-resource='spices'>
              <img src='img/spices.png'> <span>${resources.get('spices').total}</span>
            </span>

            <span class='resource' data-resource='gold'>
              <img src='img/gold.png'> <span>${resources.get('gold').total}</span>
            </span>

            <span class='resource' data-resource='gems'>
              <img src='img/gems.png'> <span>${resources.get('gems').total}</span>
            </span>

            <br>

            <span class='resource power-resources'>
              <img src='img/illuminati-alt.png'> Power
            </span>

            <span class='resource' data-unlocked='${resources.get('spaghetti').unlocked}' data-resource='spaghetti'>
              <img src='img/spaghetti.png'> <span>${resources.get('spaghetti').total}</span>
            </span>

            <span class='resource' data-unlocked='${resources.get('chihuahua').unlocked}' data-resource='chihuahua'>
              <img src='img/chihuahua.png'> <span>${resources.get('chihuahua').total}</span>
            </span>

          </div>



        </section>
        <br>
        <section class='resource-screen-inner resource-info-screen'>
          <p>Click on a resource to recieve more information on it!</p>
        </section>
      </section>
    `;
    return resourcesScreen;
  }

  createScreenHeader(playerCiv:Civilization, game:Game):string {
    let screenHeader = `
      <header class='screen-header'>
        <h1>Clickopolis</h1>
        <h2>${playerCiv.leaderName} of ${playerCiv.civName} &mdash; ${game.era} era &mdash; <span class='game-year-text'>${game.year}</span> AC</h2>
      </header>
    `;
    return screenHeader;
  }

  createCitizenScreen(playerCiv:Civilization, citizens:Collection):string {
    let citizensScreen = `
      <section class='screen citizens-screen' id='citizens'>
        <h2><img src='img/citizens.png'> Citizens</h2>
        <section class='citizens-screen-inner'>
          <p class='center-text citizens-employed'>
            <span><img src='img/citizen.png'> <span class='citizens-population-text'>${playerCiv.populationEmployed} / ${playerCiv.population}</span>
          </p>
          <p class='center-text'>Each citizen produces 1 <img src='img/coin.png'>, 2 <img src='img/research.png'>, 1 <img src='img/angry.png'>, and 1 <img src='img/pollution.png'></p>
          <p class='center-text'>Each citizen also consumes 1 <img src='img/food.png'> PS</p>
          <span class='citizens'>
            <div class='row citizen-farmer'>
              <button data-citizen='farmer' data-citizen-amount=-1>-1</button>
              <span class='citizen-icon'><img src='img/farmer.png'></span>
              <button data-citizen='farmer' data-citizen-amount=1>+1</button>
              <span class='citizen-info'>
                Farmers: <strong class='farmer-num-text'>${citizens.get('farmer').amount}</strong> | Farmers provide +1 <img src='img/food.png'> PC and +.2 PC.
              </span>
            </div>
            <div class='row citizen-miner'>
              <button data-citizen='miner' data-citizen-amount='-1'>-1</button>
              <span class='citizen-icon'><img src='img/miner.png'></span>
              <button data-citizen='miner' data-citizen-amount='1'>+1</button>
              <span class='citizen-info'>
                Miners: <strong class='miner-num-text'>0</strong> | Miners provide +1 <img src='img/prod.png'> PC and +.2 PC.
              </span>
            </div>
            <div class='row citizen-soldier'>
              <button data-citizen='soldier' data-citizen-amount='-1'>-1</button>
              <span class='citizen-icon'><img src='img/soldier-alt.png'></span>
              <button data-citizen='soldier' data-citizen-amount='1'>+1</button>
              <span class='citizen-info'>
                Soldiers: <strong class='soldier-num-text'>0</strong> | Soldiers defend and fight for your empire. -3 <img src='img/coin.png'>
              </span>
            </div>
            <div class='row citizen-cleric'>
              <button data-citizen='cleric' data-citizen-amount='-1'>-1</button>
              <span class='citizen-icon'><img src='img/cleric.png'></span>
              <button data-citizen='cleric' data-citizen-amount='1'>+1</button>
              <span class='citizen-info'>
                Clerics: <strong class='cleric-num-text'>0</strong> | Clerics heal your empire. +1 <img src='img/health.png'>, +1 <img src='img/faith.png'> PM
              </span>
            </div>
          </span>
        </section>
      </section>
    `;
    return citizensScreen;
  }

  createCivilizationScreen(playerCiv:Civilization):string {
    let civilizationScreen = `
      <section class='screen civilization-screen' id='civilization'>
        <h2><img src='img/empire.png'> Civilization</h2>
        <section class='civilization-screen-inner'>
          <div class='panel population-panel'>
            <button class='pop-btn'>+1 Population (<img src='img/food.png'> <span class='pop-growth-cost'>${playerCiv.populationGrowthCost}</span>)</button>
            <span class='civ-metric metric-population' title='${playerCiv.populationReal + ' people'}'>Population: <img src='img/citizen.png'> <span class='population-text'>${playerCiv.population}</span></span>
          </div>
          <div class='panel civ-metric-panel'>
            <span class='civ-metric metric-happiness'>
              <img src='img/happy.png'> ${playerCiv.happiness}
            </span>
            <span class='civ-metric metric-anger'>
              <img src='img/angry.png'> <span class='civ-anger-text'>${playerCiv.anger}</span>
            </span>
            <span class='civ-metric metric-health'>
              <img src='img/health.png'> ${playerCiv.health}
            </span>
            <span class='civ-metric metric-pollution'>
              <img src='img/pollution.png'> <span class='civ-pollution-text'>${playerCiv.pollution}</span>
            </span>
            <span class='civ-metric metric-influence'>
              <img class='influence-img' src='img/influence.png'> ${playerCiv.influence}
            </span>
            <span class='civ-metric metric-golden-age' title='Golden age points trigger Golden Ages. Points are earned by your happiness, minus anger.'>
              <img src='img/golden-age.png'> Golden Age Points <span class='golden-age-progress'>${playerCiv.goldenAgeProgress}</span> / <span class='golden-age-goal'>${u.abbrNum(playerCiv.goldenAgeGoal, 2)}</span>
            </span>
          </div>
        </section>
        <section class='civilization-screen-inner'>
          <h3>Civilization Overview</h3>
        </section>
      </section>
    `;
    return civilizationScreen;
  }

  createEconomyScreen(playerCiv:Civilization) {
    let economyScreen = `
      <section class='screen economy-screen' id='economy'>
        <h2><img src='img/money.png'> Economy</h2>
        <section class='economy-screen-inner'>
          <div class='total-cash'>
            <img src='img/coin.png'> <span class='cash-text'>${playerCiv.cash}</span>
          </div>
          <span class='cash-breakdown'>
            <span class='cash-item'>From Citizens: <span class='cash-from-citizens'>0</span></span>
            <span class='cash-item'>From Trade Routes: <span class='cash-from-routes'>0</span></span>
            <span class='cash-item'>From Buildings: <span class='cash-from-buildings'>0</span></span>
            <span class='cash-item'>From Military: <span class='cash-from-military'>0</span></span>
            <span class='cash-item cash-item-total'>Per Minute: <span class='cash-PM'>${playerCiv.cashPM}</span></span>
          </span>
          <div class='trade-deal-history hidden'>
            <table>
              <tr>
                <td colspan='4'><img src='img/trade-deal.png'> Trade Deal History</td>
              </tr>
              <tr>
                <td>Nation</td>
                <td>Gave...</td>
                <td>For...</td>
                <td>Year</td>
              </tr>
              <tr>
                <td>Ulonia</td>
                <td>10 <img src='img/horse.png'></td>
                <td>5 <img src='img/gold.png'></td>
                <td>25 AC</td>
              </tr>
            </table>


          </div>
        </section>
      </section>
    `;
    return economyScreen;
  }

  createBuildingsScreen() {
    let buildingsScreen = `
      <section class='screen buildings-screen' id='buildings'>
        <h2><img src='img/buildings.png'> Buildings</h2>
        <section class='buildings-screen-inner'>
          <div class='panel buildings-mode'>
            <button class='purchase-mode-btn hidden'>Purchase Mode</button>
          </div>
        </section>
        <section class='buildings-screen-inner buildings'>
        </section>
      </section>
    `;
    return buildingsScreen;
  }

  createWondersScreen() {
    let wondersScreen = `
      <section class='screen wonders-screen' id='wonders'>
        <h2><img src='img/wonder.png'> Wonders</h2>
        <section class='wonders-screen-inner'>
        </section>
        <section class='wonders-screen-inner wonders'>
        </section>
      </section>
    `;
    return wondersScreen;
  }

  createTechnologyScreen(playerCiv:Civilization) {
    let technologyScreen = `
      <section class='screen technology-screen' id='technology'>
        <h2><img src='img/research.png'> Technology</h2>
        <section class='technology-screen-inner'>
          <div class='center-text current-research'>Currently researching towards: <span class='researching-techs'>${playerCiv.researchingTechs}</span></div>
          <div class='center-text research-exceeding'></div>
          <span class='research-text r-text'>${playerCiv.research}</span>
          <div class='research-progress-bar'></div>
          <span class='research-cost-text r-text'>${playerCiv.researchCost}</span>
        </section>
        <section class='technology-screen-inner search'>
          <input type='search' placeholder='filter...'>
          <span class='research-filters'>
            <label><input type='checkbox'>Show Unavailable Techs</label><br>
            <label><input type='checkbox'>Show Purchased Techs</label>
          </span>
        </section>
        <section class='technology-screen-inner technologies'>
          <span style='color:white;' class='center-text'>Press Ctrl + Click to deselect a tech.</span>
        </section>
      </section>
    `;
    return technologyScreen;
  }


  createDiplomacyScreen(playerCiv:Civilization) {
    let diplomacyScreen = `
    <section class='screen diplomacy-screen' id='diplomacy'>
      <h2>
        <img src='img/deal.png'> Diplomacy
      </h2>
      <section class='diplomacy-screen-inner'>
        <div class='diplomacy-summary'>
          Nations Met: <span class='nations-met-text'>25</span> &lozf;
          Nations Destroyed: <span class='nations-destroyed-text'>0</span> &lozf;
          Nations Absorbed: <span class='nations-absorbed-text'>0</span>
        </div>
      </section>
      <section class='diplomacy-screen-inner'>
        <div class='nation'>
          <div class='nation-header'>
            <div class='nation-name'>Entropia</div>
            <img class='nation-img' src='img/empire-4.png'>
            <button class='nation-interact-btn'>Interact</button>
          </div>
          <div class='nation-profile'>
            <p class='nation-description'>
              A technologically advanced nation ocuppied by religious exiles.
            </p>
            <div class='nation-metrics'>
              <img src='img/influence.png'> <span class='nation-influence-text'>12</span>
              <img src='img/strength.png'> <span class='nation-strength-text'>33</span>
              <img src='img/defense.png'> <span class='nation-defense-text'>23</span>
              <img src='img/coin.png'> <span class='nation-cash-text'>1.5K</span>
            </div>
          </div>
        </div>

        <div class='nation'>
          <div class='nation-header' style='background: #6CDBE0;'>
            <div class='nation-name'>Arcopolis</div>
            <img class='nation-img' src='img/empire-8.png'>
            <button class='nation-interact-btn'>Interact</button>
          </div>
          <div class='nation-profile'>
            <p class='nation-description'>
              A seafaring nation prone to violence.
            </p>
            <div class='nation-metrics'>
              <img src='img/influence-alt.png'> <span class='nation-influence-text'>-4</span>
              <img src='img/strength.png'> <span class='nation-strength-text'>55</span>
              <img src='img/defense.png'> <span class='nation-defense-text'>68</span>
              <img src='img/coin.png'> <span class='nation-cash-text'>3.7K</span>
            </div>
          </div>
        </div>
      </section>
    </section>
    `;
    return diplomacyScreen;
  }

  createMilitaryScreen(playerCiv:Civilization) {
    let militaryScreen = `
      <section class='screen military-screen' id='military'>
        <h2>
          <img src='img/military.png'> Military
        </h2>
        <section class='military-screen-inner'>
          <span class='military-strength military-metric'><img src='img/strength.png'> Strength: <span class='military-strenght-text'>${playerCiv.strength}</span></span>
          <span class='military-defense military-metric'><img src='img/defense.png'> Defense: <span class='military-defense-text'>${playerCiv.defense}</span></span>
          <span class='military-soldiers military-metric'><img src='img/soldier.png'> Soldiers: <span class='military-soldiers-text'>0</span></span>
        </section>
        <section class='military-screen-inner'>
          <h3>Soldier Assignments</h3>
        </section>
        <section class='military-screen-inner'>
          <h3>Military Bases</h3>
        </section>
        <section class='military-screen-inner'>
          <h3>Military Operations</h3>
        </section>
      </section>
    `;
    return militaryScreen;
  }

  createCultureScreen(playerCiv:Civilization) {
    let cultureScreen = `
      <section class='screen culture-screen' id='culture'>
        <h2>
          <img src='img/culture.png'> Culture
        </h2>
        <section class='culture-screen-inner'>

        </section>
      </section>
    `;
    return cultureScreen;
  }

  createFaithScreen(playerCiv:Civilization) {
    let faithScreen = `
      <section class='screen faith-screen' id='faith'>
        <h2>
          <img src='img/faith-alt.png'> Faith
        </h2>
        <section class='faith-screen-inner'>

        </section>
      </section>
    `;
    return faithScreen;
  }

  createHistoryScreen(playerCiv:Civilization) {
    let historyScreen = `
      <section class='screen history-screen' id='history'>
        <h2>
          <img src='img/history.png'> History of ${playerCiv.civName}
        </h2>
        <section class='history-screen-inner history'>

        </section>
      </section>
    `;
    return historyScreen;
  }



  createSettingsScreen(playerCiv:Civilization, game:Game) {
    let settingsScreen = `
      <section class='screen settings-screen' id='settings'>
        <h2>
          <img src='img/gear.png'> Settings
        </h2>
        <section class='settings-screen-inner'>
          <p><span class='settings-label'>Game Skin:</span>
            <span class='ui-button ancient era-skin'>Ancient</span>
            <span class='ui-button classical era-skin'>Classical</span>
            <span class='ui-button medieval era-skin'>Medieval</span>
          </p>
          <p><span class='settings-label'>UI:</span>
            <span class='ui-button vertical-button'><img src='img/vertical.png' title='vertical'></span>
            <span class='ui-button grid-button'><img src='img/grid.png' title='grid'></span>
          </p>
        </section>
      </section>
    `;
    return settingsScreen;
  }






}

export = Templates;
