import Game = require('./game');
import Civilization = require('./civilization');
import Resource = require('./resource');
import Citizen = require('./citizen');
import Wonder = require('./wonder');
import Collection = require('./collection');
import { Utils } from './utils';

let u = new Utils();

class Templates {

  createStartScreen(playerCiv:Civilization, game:Game) {

    let startScreen = `
      <section class='clickopolis-intro clickopolis-open'>
        <h1><img class='clickopolis-logo custom-size-img' alt='Clickopolis' src='img/clickopolis-logo.png'></h1>
        <div class="start-options">
          <!--
          <button class="large-btn start-btn load-btn">Load Game...</button>
          <button class="large-btn start-btn new-btn">New Game</button>
          -->
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


  startScreen:string = `
    <section class='clickopolis-new-game clickopolis-open'>
      <h2 class='clickopolis-new-game-header'>New Game</h2>
      <hr>
      <section class='clickopolis-new-game-inner'>
      <section class='half-section'>
        <form class='new-game-settings'>
          <label for='leader'>Leader</label>
          <select name='leader' id='civ-leader-select' tabindex='1'>
            <option>Select a Leader!</option>
            <option value='Abraham Lincoln'>Abraham Lincoln</option>
            <option value='Margaret Thatcher'>Margaret Thatcher</option>
            <option value='Nelson Mandela'>Nelson Mandela</option>
            <option value='John F Kennedy'>John F Kennedy</option>
            <option value='Vladimir Lenin'>Vladimir Lenin</option>
            <option value='Mao Zedong'>Mao Zedong</option>
          </select>

          <label for='name'>Name</label>
          <input type='text' id='leaderName' name='name' placeholder='Jake' maxlength='12' value='' tabindex='2' />

          <label for='civilizationName'>Civilization</label>
          <input type='text' id="civName"  placeholder='Jaketopia' maxlength='20' value='' tabindex='3' />

          <label for='biome'>Location</label>
          <div class='new-game-select-dropdown biome-select-dropdown' data-open='false' tabindex='4'>
            <div class='new-game-select-dropdown-inner biome-select-dropdown-inner'>Select a Biome &#9660;</div>
          </div>
          <ul class='new-game-select biome-select' data-open='false'>
            <li data-value='Desert'>
              <img src='img/desert.png'> Desert
            </li>
            <li data-value='Mountains'>
              <img src='img/mountains.png'> Mountains
            </li>
            <li data-value='Island'>
              <img src='img/island.png'> Island
            </li>
            <li data-value='Forest'>
              <img src='img/forest.png'> Forest
            </li>
            <li data-value='Plains'>
              <img src='img/plains.png'> Plains
            </li>
          </ul>
          <input type='hidden' name='biome' id='biome-input'>

          <br>
          <label for='color'>Color</label><br/>
          <input type='text' name='color' id='color' value='#5fe49b' tabindex='5' />
          <div class='color-field' data-color=''>
            <div class='color-field-inner'></div>
          </div>


        </form>
      </section>

      <section class='half-section'>
        <div class='leader-display'>
          <header class='leader-header'></header>
          <img class='leader-image' src='../img/question.png' />
          <div class='traits-list'>
          </div>
        </div>
      </section>
      </section>

      <button class='begin-btn' tabindex='6'>Begin Game!</button>

    </section>
  `;

  // <img class='clickopolis-logo custom-size-img' src='img/clickopolis-logo.png'>
  // <p>Starting from the flames of the ancient world, you will progress steadily towards modernity&hellip;and beyond. You, the leader of a small faction of hunter-gatherers, have decided to settle
  //   <select id="biome">
  //     <option value="none">select an option!</option>
  //     <option value="Desert">in a Desert</option>
  //     <option value="Coast">by the Coast</option>
  //     <option value="Island">on an Island</option>
  //     <option value="Jungle">in a Jungle</option>
  //     <option value="Mountains">on the Mountains</option>
  //     <option value="Forest">in a Forest</option>
  //     <option value="Tundra">in a Tundra</option>
  //     <option value="Glacier">on a Glacier</option>
  //   </select>
  // </p>
  // <p>Your name is <input type="text" id="leaderName" maxlength="10" size="10" placeholder="Jake"> of <input type="text" id="civName" placeholder="Jaketopia" maxlength="20"></p>
  // <p>You are a(n)
  //   <select id="trait">
  //     <option value="aggressive">aggressive</option>
  //     <option value="cosmpolitan">cosmpolitan</option>
  //     <option value="daring">daring</option>
  //     <option value="expansionist">expansionist</option>
  //     <option value="haughty">haughty</option>
  //     <option value="flirtatious">flirtatious</option>
  //     <option value="industrious">industrious</option>
  //     <option value="isolationist">isolationist</option>
  //     <option value="pacifistic">pacifistic</option>
  //     <option value="persuasive">persuasive</option>
  //   </select>
  //  leader.</p>
  //
  //  <button class='begin-btn'>Begin Game!</button>

  createDebugPanel(debugMode:boolean) {
    let debugPanel = `
      <div class='debug-panel'>
        <div class='debug-lead debug-item' data-tooltip='Toggle debug panel'>
          Debug
        </div>
        <button class='fast-forward' data-tooltip='Fast Foward 1 Year'>
          &#9658;&#9658;
        </button>
        <button class='outline-page' data-tooltip='outline page'>
          &boxplus;
        </button>
        <button class='debug-add-science' data-tooltip='adds 10K research'>
          <img src='img/research.png'>
        </button>
        <button class='debug-production' data-tooltip='adds 500 production'>
          <img src='img/prod.png'>
        </button>
      </div>
    `;

    return debugMode ? debugPanel : '';
  }

  createMenuScreen() {
    let menuScreen = `
      <section class='screen menu-screen' id='menu'>
        <section class='menu-screen-inner'>
          <h3>menu</h3>
          <ul class='menu links'>
            <li><a data-tooltip='Resources' href='#resources'><img src='img/resources.png'></a></li>
            <li><a data-tooltip='Civilization' href='#civilization'><img src='img/empire.png'></a></li>
            <li><a data-tooltip='Citizens' href='#citizens'><img src='img/citizens.png'></a></li>
            <li><a data-tooltip='Economy' href='#economy'><img src='img/economy.png'></a></li>
            <li><a data-tooltip='Buildings' href='#buildings'><img src='img/buildings.png'></a></li>
            <li><a data-tooltip='Wonders' href='#wonders'><img src='img/wonder.png'></a></li>
            <li><a data-tooltip='Technology' href='#technology'><img src='img/research.png'></a></li>
            <li><a data-tooltip='Diplomacy' href='#diplomacy'><img src='img/diplomacy.png'></a></li>
            <!--<li><a data-tooltip='Espionage' href='#espionage'><img src='img/espionage.png'></a></li>-->
            <li><a data-tooltip='Military' href='#military'><img src='img/military.png'></a></li>
            <li><a data-tooltip='Culture' href='#culture'><img src='img/culture.png'></a></li>
            <li><a data-tooltip='Faith' href='#faith'><img src='img/faith.png'></a></li>
            <li><a data-tooltip='Legacy' href='#legacy'><img src='img/legacy.png'></a></li>
            <li><a data-tooltip='Achievements' href='#achievements'><img src='img/achievements.png'></a></li>
            <li><a data-tooltip='History' href='#history'><img src='img/history.png'></a></li>
            <li><a data-tooltip='Settings' href='#settings'><img src='img/settings.png'></a></li>
            <li id='clear-local-storage'><a href='#'><img src='img/trash.png'></a></li>
          </ul>
        </section>
      </section>
    `;
    return menuScreen;
  }

  createResourcesScreen(playerCiv:Civilization, resources:Collection<Resource>) {
    let resourcesScreen = `
      <section class='screen resources-screen' id='resources'>
        <h2 data-tooltip='Resources are nice.'><img src='img/resources.png'> Resources</h2>
        <section class='resources-screen-inner'>
          <div class='panel food-panel'>
            <button class='food-btn'><img src='img/food-alt.png'> Grow Food</button>

            <span class='resource-info r-food-total r-food' data-label='total'>${resources.get('food').total}</span>
            <span class='resource-info r-food-pc r-food' data-label='per click' data-toolitp='the amount of food you earn per click'>${resources.get('food').perClick}</span>
            <span class='resource-info r-food-ps r-food' data-label='per sec' data-toolitp='the amount of food you earn per second'>${resources.get('food').perSecond}</span>
            <span class='resource-info r-food-max r-food' data-label='max'>${resources.get('food').max}</span>


          </div>
          <div class='panel prod-panel'>
            <button class='prod-btn'><img src='img/prod.png'> Create Production</button>

            <span class='resource-info r-prod-total r-prod' data-label='total'>${resources.get('prod').total}</span>
            <span class='resource-info r-prod-pc r-prod' data-label='per click' data-toolitp='the amount of production you make per click'>${resources.get('prod').perClick}</span>
            <span class='resource-info r-prod-ps r-prod' data-label='per sec' data-toolitp='the amount of production you make per second'>${resources.get('prod').perSecond}</span>
            <span class='resource-info r-prod-max r-prod' data-label='max'>${resources.get('prod').max}</span>


          </div>

          <div class='panel location-panel'>
            <div class='biome biome-lead'>Biomes: </div>
            <span class='biome-container'>
            </span>
          </div>


          <div class='panel resources-panel'>
            <span class='resource health-resources'>
              <img src='img/health.png'> Health
            </span>

            <span class='resource' data-resource='cattle' data-unlocked='${resources.get('cattle').unlocked}'>
              <img src='img/cattle.png'> <span>${resources.get('cattle').total}</span>
            </span>

            <span class='resource' data-resource='fish' data-unlocked='${resources.get('fish').unlocked}'>
              <img src='img/fish.png'> <span>${resources.get('fish').total}</span>
            </span>

            <span class='resource' data-resource='banana' data-unlocked='${resources.get('banana').unlocked}'>
              <img src='img/banana.png'> <span>${resources.get('banana').total}</span>
            </span>

            <br>

            <span class='resource building-resources'>
              <img src='img/buildings.png'> Building
            </span>

            <span class='resource' data-resource='stone' data-unlocked='${resources.get('stone').unlocked}'>
              <img src='img/stone.png'> <span>${resources.get('stone').total}</span>
            </span>

            <span class='resource' data-unlocked='${resources.get('iron').unlocked}' data-resource='iron'>
              <img src='img/iron.png'> <span>${resources.get('iron').total}</span>
            </span>

            <span class='resource' data-unlocked='${resources.get('steel').unlocked}' data-resource='steel'>
              <img src='img/steel.png'> <span>${resources.get('steel').total}</span>
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

            <span class='resource luxury-resources' data-tall='true'>
              <img src='img/crown.png'> Luxury
            </span>

            <span class='resource' data-resource='spices' data-unlocked='${resources.get('spices').unlocked}'>
              <img src='img/spices.png'> <span>${resources.get('spices').total}</span>
            </span>

            <span class='resource' data-resource='gold' data-unlocked='${resources.get('gold').unlocked}'>
              <img src='img/gold.png'> <span>${resources.get('gold').total}</span>
            </span>

            <span class='resource' data-resource='silver' data-unlocked='${resources.get('silver').unlocked}'>
              <img src='img/silver.png'> <span>${resources.get('silver').total}</span>
            </span>

            <span class='resource' data-resource='gems' data-unlocked='${resources.get('gems').unlocked}'>
              <img src='img/gems.png'> <span>${resources.get('gems').total}</span>
            </span>

            <span class='resource' data-resource='pearls' data-unlocked='${resources.get('pearls').unlocked}'>
              <img src='img/pearls.png'> <span>${resources.get('pearls').total}</span>
            </span>

            <span class='resource' data-resource='whale' data-unlocked='${resources.get('whale').unlocked}'>
              <img src='img/whale.png'> <span>${resources.get('whale').total}</span>
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
        <div class='player-info'>
          <img src='img/${u.dasherize(playerCiv.leader.name)}.jpg'>
          <div><strong>${playerCiv.leaderName}</strong> of <em>${playerCiv.civName}</em></div>
          <div>${game.era} era &mdash; <span class='game-year-text'>${game.year}</span> AC</div>
        </div>
        <div class='civilization-metrics'>
          <p>This space will hold metrics you can view at a glance.</p>
          <!--
          <div class='food-metric'>
            <img src='img/food.png'><span class='m-food-total'>0</span>
          </div>
          <div class='prod-metric'>
            <img src='img/prod.png'><span class='m-prod-total'>0</span>
          </div>
          <div class='happiness-metric'>
            <img src='img/happy.png'><span class='m-happiness-total'>0</span>
          </div>
          <div class='anger-metric'>
            <img src='img/angry.png'><span class='m-anger-total'>0</span>
          </div>
          <div class='health-metric'>
            <img src='img/health.png'><span class='m-health-total'>0</span>
          </div>
          -->
        </div>
        <div class='notification-center'>
          <img src='img/notification.png'>
        </div>
      </header>
    `;
    return screenHeader;
  }

  createCitizenScreen(playerCiv:Civilization, citizens:Collection<Citizen>):string {
    let citizensScreen = `
      <section class='screen citizens-screen' id='citizens'>
        <h2><img src='img/citizens.png'> Citizens</h2>
        <section class='citizens-screen-inner'>
          <p class='center-text citizens-employed'>
            <span><img src='img/citizen.png'> <span class='citizens-population-text'>${playerCiv.populationEmployed} / ${playerCiv.population}</span>
          </p>
          <br>
          <div class='citizen-percentages'></div>
          <span class='citizens'></span>
          <p class='center-text'>Each citizen produces 2 <img src='img/coin.png'>, 2 <img src='img/research.png'>, 1 <img src='img/angry.png'>, and 1 <img src='img/pollution.png'></p>
          <p class='center-text'>Each citizen also consumes 1 <img src='img/food.png'> PS</p>
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
            <button class='pop-btn'>
              +1 Population
              <span class='pop-growth-cost'>
                <span class='pop-growth-cost-text'>${playerCiv.populationGrowthCost}</span>
                <img src='img/food.png'>
              </span>
            </button>
            <span class='civ-metric metric-population' data-tooltip='${u.abbrNum(playerCiv.populationReal) + ' people'}'>
              Population: <img src='img/citizen.png'> <span class='population-text'>${playerCiv.population}</span>
            </span>
            <span data-tooltip='Your net migration per minute' class='civ-metric metric-migration'>
              ${playerCiv.netMigration} PM <img src='img/passport.png'>
            </span>
          </div>
          <div class='panel civ-metric-panel'>
            <span data-tooltip='Your total land' class='civ-metric metric-land' data-tooltip=''>
              ${playerCiv.land} km<sup>2</sup> <img src='img/land.png'>
            </span>
            <span data-tooltip='The percentage of the world you control' class='civ-metric metric-land'>
              <span class='land-percent-text'>0%</span>&nbsp;&nbsp;<img src='img/land-possession.png'>
            </span>
            <br>
            <span class='civ-metric metric-happiness' data-tooltip=''>
              ${playerCiv.happiness} <img src='img/happy.png'>
            </span>
            <span class='civ-metric metric-anger' data-tooltip=''>
              <span class='civ-anger-text'>${playerCiv.anger}</span> <img src='img/angry.png'>
            </span>
            <span class='civ-metric metric-health' data-tooltip=''>
              ${playerCiv.health} <img src='img/health.png'>
            </span>
            <span class='civ-metric metric-pollution' data-tooltip=''>
              <span class='civ-pollution-text'>${playerCiv.pollution}</span> <img src='img/pollution.png'>
            </span>
            <br>
            <span data-tooltip='Golden Age points are your happiness minus anger' class='civ-metric metric-golden-age-points'>${playerCiv.happiness - playerCiv.anger} <img src='img/golden-age.png'></span>
            <span data-tooltip='When you max out your progress bar, you reach a Golden Age!' class='civ-metric metric-golden-age' data-toolitp='Golden age points trigger Golden Ages. Points are earned by your happiness, minus anger.'>
              <img src='img/golden-age.png'> Golden Age Points <span class='golden-age-progress'>${playerCiv.goldenAgeProgress}</span> / <span class='golden-age-goal'>${u.abbrNum(playerCiv.goldenAgeGoal, 2)}</span>
            </span>
            <span data-tooltip='Your total number of Golden Ages' class='civ-metric metric-golden-ages'>${playerCiv.goldenAges} GAs</span>
            <br>
            <br>
            <span class='civ-metric metric-influence-text'>Influence</span>
            <span data-tooltip='Your influence on the domestic front' class='civ-metric metric-domestic-influence' data-label='domestic'>
              ${playerCiv.influenceDomestic} <img class='metric-domestic-influence-img' src='img/influence-domestic.png'>
            </span>
            <span data-tooltip='Your influence on the international stage' class='civ-metric metric-international-influence' data-label='international'>
              ${playerCiv.influenceInternational} <img class='metric-international-influence-img' src='img/influence-international.png'>
            </span>
          </div>
        </section>
        <section class='civilization-screen-inner civilization-overview'>
          <div style='text-align:center;color:#eee'>Civilization Overview</div>
          <a href='#economy'>
          <div class='overview-item overview-economy'>
            <div class='overview-item-name'>Economy</div>
            <div class='overview-item-inner'>
              <img src='img/coin.png'> <span class='cash-text'>${playerCiv.cash}</span> <sup>${playerCiv.cashPM}</sup>
            </div>
          </div>
          </a>
          <a href='#technology'>
          <div class='overview-item'>
            <div class='overview-item-name'>Technology</div>
            <div class='overview-item-inner'>
              <img src='img/research.png'> ${playerCiv.research} <sup>${playerCiv.researchPM}</sup>
            </div>
          </div>
          </a>
          <a href='#faith'>
          <div class='overview-item'>
            <div class='overview-item-name'>Faith</div>
            <div class='overview-item-inner'>
              <img src='img/faith.png'> ${playerCiv.faith} <sup>${playerCiv.faithPM}</sup>
            </div>
          </div>
          </a>
          <a href='#culture'>
          <div class='overview-item'>
            <div class='overview-item-name'>Culture</div>
            <div class='overview-item-inner'>
              <img src='img/culture.png'> ${playerCiv.culture} <sup>${playerCiv.culturePM}</sup>
            </div>
          </div>
          </a>
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
            <span class='cash-item'>from <img src="img/citizens.png"> <span class='cash-from-citizens'>${playerCiv.cashPMFromCitizens}</span></span>
            <span class='cash-item'>from <img src="img/trade-deal.png"> <span class='cash-from-routes'>${playerCiv.cashPMFromTradeRoutes}</span></span>
            <span class='cash-item'>from <img src="img/buildings.png"> <span class='cash-from-buildings'>${playerCiv.cashPMFromBuildings}</span></span>
            <span class='cash-item'>from <img src="img/military.png"> <span class='cash-from-military'>${playerCiv.cashPMFromMilitary}</span></span>
          </span>
          <span class='cash-breakdown'>
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

  createBuildingsScreen(resources:Collection<Resource>) {
    let buildingsScreen = `
      <section class='screen buildings-screen' id='buildings'>
        <h2><img src='img/buildings.png'> Buildings</h2>
        <section class='buildings-screen-inner'>
          <div class='panel buildings-mode'>
            <span class='prod-wrapper'><span class='prod-total'>${resources.get('prod').total}</span> <img src='img/prod.png'></span>
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

  createWonder(w:Wonder, i:number):string {
    let wonder = `
    <div class='wonder' data-id='${i}' data-wonder='${w.name}'>
      <span class='wonder-image'><img src='${w.getImg()}'></span>
      <span class='wonder-name'>${w.name}</span><br>
      <span class='wonder-description'>${w.description}</span>
      <span class='wonder-effect'>${w.effect}</span>
      <span class='btn btn-build-wonder'>Build (${u.time(w.buildTime)})</span>
    </div>`;
    return wonder;
  }

  createTechnologyScreen(playerCiv:Civilization) {
    let technologyScreen = `
      <section class='screen technology-screen' id='technology'>
        <h2><img src='img/research.png'> Technology</h2>
        <section class='technology-screen-inner'>
          <div class='research-PM-wrapper' data-tooltip='The amount of research points you produce per minute.'>
            <span class='research-PM'>${playerCiv.researchPM}</span> <img src='img/research.png'> PM</span>
          </div>
          <div class='tech-queue'>
            <div>Queue: </div>
          </div>
          <div class='center-text current-research hidden'>Currently researching towards: <span class='researching-techs'>${playerCiv.researchingTechs}</span></div>
          <div class='center-text research-exceeding'></div>
          <span class='research-text r-text'>${playerCiv.research}</span>
          <div class='research-progress-bar'></div>
          <span class='research-cost-text r-text'>${playerCiv.researchCost}</span>
        </section>
        <section class='technology-screen-inner search hidden'>
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
        <section class='military-screen-inner military-metrics'>
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
        <section class='culture-screen-inner culture-metrics'>
          <div class='culture-wrapper' data-tooltip='The amount of culture you produce per minute.'>
            <span class='culture-PM'>${playerCiv.culturePM}</span> <img src='img/culture.png'> PM
          </div>
          <div class='culture-wrapper' data-tooltip='The amount of culture you have in total.'>
            <span class='culture-PM'>${playerCiv.culture}</span> <img src='img/culture.png'> total
          </div>
        </section>
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
        <section class='faith-screen-inner faith-metrics'>
          <div class='faith-wrapper' data-tooltip='The amount of faith you produce per minute.'>
            <span class='faith-PM'>${playerCiv.faithPM}</span> <img src='img/faith.png'> PM</span>
          </div>
          <div class='faith-wrapper' data-tooltip='Your total faith amount.'>
            <span class='faith-total'>${playerCiv.faith}</span> <img src='img/faith.png'> total</span>
          </div>
        </section>
        <section class='faith-screen-inner fb-container'>

        </section>
      </section>
    `;
    return faithScreen;
  }

  createLegacyScreen(playerCiv:Civilization) {
    let legacyScreen = `
      <section class='screen legacy-screen' id='legacy'>
        <h2>
          <img src='img/legacy.png'> Legacy
        </h2>
        <section class='legacy-screen-inner'>
          <div class='legacy-wrapper'>
            <img src='img/legacy.png'> <span class='legacy-points'>${playerCiv.legacy}</span> Legacy Points
          </div>
        </section>
        <section class='legacy-screen-inner legacy-bonuses'>

        </section>
      </section>
    `;
    return legacyScreen;
  }

  createAchievementsScreen(playerCiv:Civilization) {
    let achievementsScreen = `
      <section class='screen achievements-screen' id='achievements'>
        <h2>
          <img src='img/achievements.png'> Achievements
        </h2>
        <section class='achievements-screen-inner'>
          <div class='achievements-wrapper'>
            <img src='img/achievements.png'> <span class='achievements-total'>${playerCiv.achievements}</span> Achievements
          </div>
        </section>
        <section class='achievements-screen-inner achievements'>
          <div class='achievement baby-clicker' data-tooltip='Click once.'></div>
          <div class='achievement baby-clicker' data-tooltip='Click once.'></div>
          <div class='achievement baby-clicker' data-unlocked='false' data-tooltip='Click once.'></div>

        </section>
      </section>
    `;
    return achievementsScreen;
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
          <span class='settings-label'>Notifications</span>
          <p>
            <label class='ui-button'>
              <input type='checkbox' id='checkAllNotifications' >All Notifications
            </label>
            <label class='ui-button'>
              <input type='checkbox' id='checkEvents' >Events
            </label>
            <label class='ui-button'>
              <input type='checkbox' id='checkAchievements' >Achievements
            </label>
            <label class='ui-button'>
              <input type='checkbox' id='checkWonderCompletion' >Wonder Completion
            </label>
          </p>
          <span class='settings-label'>Citizens</span>
          <p>
            <label class='ui-button'>
              <input type='checkbox' id='automaticallyAssignCitizens' checked>
              Automatically Assign Citizens as
              <select style='color:#222'>
                <option value='farmers' selected>farmers</option>
              </select>
            </label>
          </p>
          <span class='settings-label'>User Interface</span>
          <p>
            <label class='ui-button'>
              <input type='checkbox' id='pinMenu' checked>Pin Menu
            </label>
          </p>

        </section>
      </section>
    `;
    return settingsScreen;
  }

  createEraOverlay(game) {
    let era = `<div class='overlay overlay-era' style='display:none'>
      <div class='modal modal-era era-${game.era}'>
        <h1>Welcome to the ${game.era} Era!</h1>
        <button id='remove-overlay' class='btn-era large-btn'>Continue</button>
      </div>
    </div>`;
    return era;
  }




}

export = Templates;
