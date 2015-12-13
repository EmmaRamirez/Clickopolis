//*********************************************************
// Data Heirarchy
//   Empire [Names]
//   Economy [Cash, Trade Deal History, Trade Routes]
//   Resources
//*********************************************************

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
  }

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
  },

  setData: function() {
    Lockr.set('civName', data.empire.civName);
    Lockr.set('leaderName', data.empire.leaderName);
    Lockr.set('foodTotal', data.resources.food.total);
    Lockr.set('foodPS', data.resources.food.ps);
    Lockr.set('foodPC', data.resources.food.pc);
    Lockr.set('prodTotal', data.resources.prod.total);
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








};
game.init();
