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

  version: "0.1.0",
  time: 0,
  era: 1,
  year: 0,

  elements: {
    button: $("[data-button]")
  },
  empire: {
    civName: "Mystery Empire",
    leaderName: "Nameless"
  },
  economy: {
    cash: {
      total: 50,
      pm: 0
    }
  },
  resources: {
    food: {
      total: 1,
      ps: 0,
      pc: 1,
      max: 1000
    },
    prod: {
      total: 10,
      ps: 1,
      pc: 44,
      max: 1000
    },
    fish: {
      total: 35,
      multiplier: 1,
      healthBonus: .5,
      img: "../img/fish.png"
    },
    banana: {
      total: 12,
      multiplier: 1,
      healthBonus: .5,
      img: "../img/banana.png"
    },
    stone: {
      total: 33,
      multiplier: 1,
      img: "../img/stone.png"
    },
    gold: {
      total: 22,
      multiplier: 1,
      img: "../img/gold.png"
    },
    gems: {
      total: 21,
      multiplier: 1,
      img: "../img/gems.png"
    },
    ivory: {
      total: 2,
      multiplier: 1,
      img: "../img/ivory.png"
    },
    horse: {
      total: 2,
      multiplier: 2,
      img: "../img/horse.png"
    },
    oil: {
      total: 0,
      multiplier: 1,
      img: "../img/oil.png"
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
        img: "../img/agriculture.png",
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

    this.bindButton();
    this.getData();
    this.updateData();
    this.setEra();
    this.setTime();
    this.setResources();
    this.settingsClick();



  },

  bindButton: function() {
    data.elements.button.click(function(){
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
        game.hardReset();
      }

      game.updateData();
      game.setData();
    });
  },

  hardReset: function() {
    // We'll have to manually reset everything :(
    data.resources.food.total = 0;
    Lockr.flush();
  },

  convertEra: function(era) {
    switch (era) {
      case 1:
        return "Ancient";
        break;
      case 2:
        return "Classical";
        break;
      case 3:
        return "Medieval";
        break;
      case 4:
        return "Renaissance";
        break;
      case 5:
        return "Enlightenment";
        break;
      case 6:
        return "Industrial";
        break;
      case 7:
        return "Modern";
        break;
      case 8:
        return "Atomic";
        break;
      case 9:
        return "Information";
        break;
      case 10:
        return "Future";
        break;
    }

  },

  setEra: function() {
    $(".era").text(game.convertEra(data.era) + " era");
  },

  updateEra: function() {
    data.era += 1;

    game.setEra();
  },



  time: function(d) {
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
  },

  setTime: function() {
    $(".time").text(game.time(data.time));
  },

  updateMilSec: setInterval(function() {
    data.resources.food.total += data.resources.food.ps / 10;
    data.resources.prod.total += data.resources.prod.pc / 10;

    game.updateData($("[data-post='resources.prod.total']"));
  }, 100),

  updateSec: setInterval(function(){

    data.time += 1;
    game.setTime();



  }, 1000),

  updateMin: setInterval(function() {
    //console.log("Data saved!");

    data.year += 1;
    game.updateData($(".year span"));

    game.setData();
  }, 60000),

  getData: function() {
    data.time                   = Lockr.get('time') || data.time;
    data.era                    = Lockr.get('era') || data.era;
    data.year                   = Lockr.get('year') || data.year;

    data.empire.civName         = Lockr.get('civName') || data.empire.civName;
    data.empire.leaderName      = Lockr.get('leaderName') || data.empire.leaderName;

    data.resources.food.total   = Lockr.get('foodTotal') || data.resources.food.total;
    data.resources.food.ps      = Lockr.get('foodPS') || data.resources.food.ps;
    data.resources.food.pc      = Lockr.get('foodPC') || data.resources.food.pc;

    data.resources.prod.total   = Lockr.get('prodTotal') || data.resources.prod.total;

    data.resources.fish.total   = Lockr.get('fishTotal') || data.resources.fish.total;
    data.resources.stone.total  = Lockr.get('stoneTotal') || data.resources.stone.total;

    data.resources.horse.img    = Lockr.get('horseImg') || data.resources.horse.img;

  },

  setData: function() {
    Lockr.set('time', data.time);
    Lockr.set('era', data.era);
    Lockr.set('year', data.year);

    Lockr.set('civName', data.empire.civName);
    Lockr.set('leaderName', data.empire.leaderName);

    Lockr.set('foodTotal', data.resources.food.total);
    Lockr.set('foodPS', data.resources.food.ps);
    Lockr.set('foodPC', data.resources.food.pc);

    Lockr.set('prodTotal', data.resources.prod.total);

    Lockr.set('fishTotal', data.resources.fish.total);
    Lockr.set('stoneTotal', data.resources.stone.total);

    Lockr.set('horseImg', data.resources.horse.img);
  },

  updateData: function(el) {
    el = typeof el !== 'undefined' ?  el : $("[data-post]");
    el.text(function() {
      var d = $(this).attr('data-post');
      var ex = $(this).attr('data-exception');
      var fixnum = $(this).attr('data-fixedTo') || 0;
      //d = d.split('.');
      // var da = 'data';
      // for (var i = 0; i < d.length; i++) {
      //   da += '[d[' + i + ']]';
      // }

      var da = d.split('.').reduce((o,i)=>o[i], data);
      // if (ex == "fixnum") {
      //   if (d.length == 1) return data[d[0]].toFixed(fixnum);
      //   if (d.length == 2) return data[d[0]][d[1]].toFixed(fixnum);
      //   if (d.length == 3) return data[d[0]][d[1]][d[2]].toFixed(fixnum);
      //   if (d.length == 4) return data[d[0]][d[1]][d[2]][d[3]].toFixed(fixnum);
      // } else {
      //   if (d.length == 1) return data[d[0]];
      //   if (d.length == 2) return data[d[0]][d[1]];
      //   if (d.length == 3) return data[d[0]][d[1]][d[2]];
      //   if (d.length == 4) return data[d[0]][d[1]][d[2]][d[3]];
      // }
      if (ex == "fixnum") {
        return da.toFixed(fixnum);
      }
      else {
        return da;
      }

    });
  },

  setResources: function() {
    var resources = ['fish', 'stone', 'ivory', 'horse', 'gold', 'gems', 'oil', 'banana'];
    for (var i = 0; i < resources.length; i++) {
      $("[data-resource='" + resources[i] + "']").prepend("<img src='" + data.resources[resources[i]].img + "' />");
    }
  },

  settingsClick: function() {
    var index = 2;
    $(".settings-lever").click(function() {
      if (index % 2 == 0) {
        $(".settings-panel").addClass("pull-down");
        $("body").addClass("pull-down");
      } else {
        $(".settings-panel").removeClass("pull-down");
        $("body").removeClass("pull-down");
      }
      index += 1;
    });
  },








};
game.init();

$(document).ready(function() {
  $('.tooltip').powerTip({
    followMouse: true
  })
});
