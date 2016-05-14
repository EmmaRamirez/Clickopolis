import Game = require('./game');
import Civilization = require('./civilization');
import Resource = require('./resource');


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
            <p>${game.era}</p>
            <p>
              <span>
                <img src="img/achievements.png"> 5
              </span>
              <span>
                <img src="img/strength.png"> 33
              </span>
              <span>
                <img src="img/defense.png"> 44
              </span>
              <span>
                <img src="img/legacy.png"> 2
              </span>
              <span>
                <img src="img/coin.png"> 1K
              </span>
              <span>
                <img src="img/wonder.png"> 1
              </span>
            </p>
          </button>
        </div>
        <!-- <button class='next-btn'>Next &rarr;</button> -->
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
          <option value="industrious">industrious</option>
          <option value="isolationist">isolationist</option>
          <option value="pacifistic">pacifistic</option>
          <option value="persuasive">persuasive</option>
        </select>
       leader.</p>

       <button class='begin-btn'>Begin Game!</button>

    </section>
  `;

  createResourcesScreen(playerCiv:Civilization, resources:Resource[]) {
    let resourcesScreen = `
      <section class='screen resources-screen'>
        <h2><img src='img/resources.png'> Resources</h2>
        <section class='resources-screen-inner'>
          <div class='panel food-panel'>
            <button class='food-btn'><img src='img/food-alt.png'> Grow Food</button>
            <span class='resource-info r-food-pc'>${resources[0].perClick} PC</span>
            <span class='resource-info r-food-ps'>${resources[0].perSecond} PS</span>
            <span class='resource-info r-food-max'>${resources[0].max} max</span>
            <span class='resource-info r-food-total'>${resources[0].total} total</span>
          </div>
          <div class='panel prod-panel'>
            <button class='prod-btn'><img src='img/prod.png'> Create Production</button>
            <span class='resource-info'>${resources[1].perClick} PC</span>
            <span class='resource-info'>${resources[1].perSecond} PS</span>
            <span class='resource-info'>${resources[1].max} max</span>
            <span class='resource-info'>${resources[1].total} total</span>
          </div>

          <div class='panel resources-panel'>
            <span class='resource' data-resource='stone'>
              <img src='img/stone.png'> <span>25</span>
            </span>

            <span class='resource' data-resource='fish'>
              <img src='img/fish.png'> <span>33</span>
            </span>

            <span class='resource' data-resource='banana'>
              <img src='img/banana.png'> <span>22</span>
            </span>

            <span class='resource' data-resource='gold'>
              <img src='img/gold.png'> <span>0</span>
            </span>

            <span class='resource' data-resource='gems'>
              <img src='img/gems.png'> <span>34</span>
            </span>

            <span class='resource' data-resource='iron'>
              <img src='img/iron.png'> <span>22</span>
            </span>

            <span class='resource' data-resource='oil'>
              <img src='img/oil.png'> <span>22</span>
            </span>

            <span class='resource' data-resource='uranium'>
              <img src='img/uranium.png'> <span>22</span>
            </span>
          </div>



        </section>
      </section>
    `;
    return resourcesScreen;
  }



  createScreenHeader(playerCiv:Civilization, game:Game):string {
    let screenHeader = `
      <header class='screen-header'>
        <h1>Clickopolis</h1>
        <h2>${playerCiv.leaderName} of ${playerCiv.civName} &mdash; ${game.era}</h2>
      </header>
    `;
    return screenHeader;
  }

  createCitizenScreen(playerCiv:Civilization):string {
    let citizensScreen = `
      <section class='screen citizens-screen'>
        <h2><img src='img/citizens.png'> Citizens</h2>
        <section class='citizens-screen-inner'>
          <div class='row citizen-farmer'>
            ${playerCiv.civName}
            ${playerCiv.leaderName}
            ${playerCiv.leaderTraits[0]}
          </div>
        </section>
      </section>
    `;
    return citizensScreen;
  }

  createCivilizationScreen(playerCiv:Civilization):string {
    let civilizationScreen = `
      <section class='screen civilization-screen'>
        <h2><img src='img/empire.png'> Civilization</h2>
        <section class='civilization-screen-inner'>
          <div class='panel population-panel'>
            <button class='pop-btn'>Grow Population (+1)</button>
            <span>Growth Cost: <img src='img/food.png'> 10</span>
            <span>Population: <img src='img/citizen.png'> 33</span>
          </div>
          <div class='panel civ-metric-panel'>
            <span class='civ-metric metric-happiness'>
              <img src='img/happiness.png'> ${playerCiv.happiness}
            </span>
            <span class='civ-metric metric-anger'>
              <img src='img/anger.png'> ${playerCiv.anger}
            </span>
            <span class='civ-metric metric-health'>
              <img src='img/health.png'> ${playerCiv.health}
            </span>
            <span class='civ-metric metric-pollution'>
              <img src='img/pollution.png'> ${playerCiv.pollution}
            </span>
            <span class='civ-emtric metric-influence'>
              <img src='img/influence.png'> ${playerCiv.influence}
            </span>
          </div>
        </section>
      </section>
    `;
    return civilizationScreen;
  }



}

export = Templates;
