class Templates {

  startScreen:string = `
    <section class='clickopolis-intro'>
      <h1>Clickopolis</h1>
      <div class="start-options">
        <button class="large-btn start-btn load-btn">Load Game...</button>
        <button class="large-btn start-btn new-btn">New Game</button>
        <button class="large-btn start-btn current-btn">
          <p class="current-game-heading">Current Game -</p>
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

  resourcesScreen:string = `
    <section class='screen resources-screen'>
      <h2>Resources</h2>
      <section class='resources-screen-inner'>
        <div class='panel food-panel'>
          <button class='food-btn'><img src='img/food.png'> Grow Food</button>
        </div>
        <div class='panel prod-panel'>
          <button class='prod-btn'><img src='img/prod.png'> Create Production</button>
        </div>

        <div class='panel resources-panel'>
          <span class='resource' data-resource='stone'>
            <img src='img/stone.png'> <span data-link='stone'>25</span>
          </span>
        </div>

      </section>
    </section>

  `;

  citizensScreen:string = `
    <section class='screen citizens-screen'>
      <h2>Citizens</h2>

    </section>
  `;



}

export = Templates;
