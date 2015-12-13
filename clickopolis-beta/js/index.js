var data = {

  resources: {
    food: {
      total: 10,
      ps: 45,
      pc: 0,
      max: 0
    },
    prod: {
      total: 10,
      ps: 0,
      pc: 0,
      max: 0
    },
  }

};

var game = {
  init: function() {

    game.getData();
    game.updateData();

    $("[data-post]").click(function(){
      data.resources.food.total += 1;
      data.resources.food.pc += 100;

      game.updateData();
      game.setData();
    });

  },

  getData: function() {
    data.resources.food.total   = Lockr.get('foodTotal') || data.resources.food.total;
    data.resources.food.ps      = Lockr.get('foodPS') || data.resources.food.ps;
    data.resources.food.pc      = Lockr.get('foodPC') || data.resources.food.pc;
  },

  setData: function() {
    Lockr.set('foodTotal', data.resources.food.total);
    Lockr.set('foodPS', data.resources.food.ps);
    Lockr.set('foodPC', data.resources.food.pc);
  },

  updateData: function() {
    $("[data-post]").text(function(){
      var d = $(this).attr('data-post');
      d = d.split('.');
      if (d.length == 1) return data[d[0]];
      if (d.length == 2) return data[d[0]][d[1]];
      if (d.length == 3) return data[d[0]][d[1]][d[2]];
      if (d.length == 4) return data[d[0]][d[1]][d[2]][d[3]];
    });
  },








};
game.init();
