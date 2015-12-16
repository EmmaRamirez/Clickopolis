//*********************************************************
// Data Heirarchy
//   Empire [Names]
//   Economy [Cash, Trade Deal History, Trade Routes]
//   Resources
//*********************************************************

// for(var x in localStorage)console.log(x+"="+((localStorage[x].length * 2)).toFixed(2)+" B")
// var localStorageSpace = function(){
//         var allStrings = '';
//         for(var key in window.localStorage){
//             if(window.localStorage.hasOwnProperty(key)){
//                 allStrings += window.localStorage[key];
//             }
//         }
//         return allStrings ? 3 + ((allStrings.length*16)/(8*1024)) + ' KB' : 'Empty (0 KB)';
//     };
var data = {

  empire: {
    civName: "",
    leaderName: ""
  },
  economy: {
    cash: {
      total: 50,
      pm: 0
    }
  },
  resources: {
    food: {
      total: 10,
      ps: 45,
      pc: 1,
      max: 0
    },
    prod: {
      total: 10,
      ps: 1,
      pc: 1,
      max: 1
    },
    fish: {
      total: 35,
      multiplier: 1,
      healthBonus: .5,
      img: "../img/fish.png"
    },
    stone: {
      total: 33,
      multiplier: 1,
      img: "../img/stone.png"
    }
  },
  tech: {

    research: {
      total: 0,
      fromBuildings: 0,
      fromCitizens: 0,
      fromCulture: 0,
      fromFaith: 0,
      pm: 0

    },
    techs: [
      {
        name: "Fake-Tech",
        era: "Ancient",
        effects: ["Can assign Citizens as Farmers."],
        flavor: "This technology is solely a test.",
        reqiures: ["Nothing", "Biology", "Data Science"],
        visible: true,
        unlocked: true,
        activated: true
      },
    ]
  },

  culture: {

  },

};

var game = {
  init: function() {

    game.getData();
    game.updateData();

    $("[data-button]").click(function(){
      var type = $(this).attr('data-button');
      if (type == "food") {
        data.resources.food.total += data.resources.food.pc;
      }
      if (type == "prod") {
        data.resources.prod.total += data.resources.prod.pc;
      }
      if (type == "change-name") {
        var c = $("#civName").val()
        var l = $("#leaderName").val();
        data.empire.civName = c;
        data.empire.leaderName = l;
      }
      if (type == "hard-reset") {
        Lockr.flush();
      }

      game.updateData();
      game.setData();
    });

  },

  updateMilSec: setInterval(function() {
    data.resources.food.total += data.resources.food.ps / 10;
    data.resources.prod.total += data.resources.prod.pc / 10;

    game.updateData();
  }, 100),

  // updateSec: setInterval(function(){
  //   data.resources.food.total += data.resources.food.ps;
  //   data.resources.prod.total += data.resources.prod.pc;
  //
  //   game.updateData();
  // }, 1000),

  updateMin: setInterval(function() {
    console.log("Data saved!");
    game.setData();
  }, 60000),

  getData: function() {
    data.empire.civName         = Lockr.get('civName') || data.empire.civName;
    data.empire.leaderName      = Lockr.get('leaderName') || data.empire.leaderName;

    data.resources.food.total   = Lockr.get('foodTotal') || data.resources.food.total;
    data.resources.food.ps      = Lockr.get('foodPS') || data.resources.food.ps;
    data.resources.food.pc      = Lockr.get('foodPC') || data.resources.food.pc;

    data.resources.prod.total   = Lockr.get('prodTotal') || data.resources.prod.total;

    data.resources.fish.total   = Lockr.get('fishTotal') || data.resources.fish.total;
    data.resources.stone.total  = Lockr.get('stoneTotal') || data.resources.stone.total;

  },

  setData: function() {
    Lockr.set('civName', data.empire.civName);
    Lockr.set('leaderName', data.empire.leaderName);

    Lockr.set('foodTotal', data.resources.food.total);
    Lockr.set('foodPS', data.resources.food.ps);
    Lockr.set('foodPC', data.resources.food.pc);

    Lockr.set('prodTotal', data.resources.prod.total);

    Lockr.set('fishTotal', data.resources.fish.total);
    Lockr.set('stoneTotal', data.resources.stone.total);
  },

  updateData: function() {
    $("[data-post]").text(function(){
      var d = $(this).attr('data-post');
      var ex = $(this).attr('data-exception');
      var fixnum = $(this).attr('data-fixedTo') || 0;
      d = d.split('.');
      if (ex == "fixnum") {
        if (d.length == 1) return data[d[0]].toFixed(fixnum);
        if (d.length == 2) return data[d[0]][d[1]].toFixed(fixnum);
        if (d.length == 3) return data[d[0]][d[1]][d[2]].toFixed(fixnum);
        if (d.length == 4) return data[d[0]][d[1]][d[2]][d[3]].toFixed(fixnum);
      } else {
        if (d.length == 1) return data[d[0]];
        if (d.length == 2) return data[d[0]][d[1]];
        if (d.length == 3) return data[d[0]][d[1]][d[2]];
        if (d.length == 4) return data[d[0]][d[1]][d[2]][d[3]];
      }

    });
  },

  setResources: function() {
    var resources = ['fish', 'stone'];
    for (var i = 0; i < resources.length; i++) {
      $("[data-resource='" + resources[i] + "']").prepend("<img src='" + data.resources[resources[i]].img + "' />");  
    }
  },








};
game.init();

game.setResources();
