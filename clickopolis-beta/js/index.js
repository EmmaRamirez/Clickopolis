var data = {

  resources: {
    food: {
      total: 10,
      ps: 45,
      pc: 0,
      max: 0
    }
  }

};

var game = {
  init: function() {
    //game.resources.food.total = localStorage.getItem('foodTotal');

    $("[data-post]").text(function(){
      var d = $(this).attr('data-post');
      d = d.split('.');
      if (d.length == 1) return data[d[0]];
      if (d.length == 2) return data[d[0]][d[1]];
      if (d.length == 3) return data[d[0]][d[1]][d[2]];
      if (d.length == 4) return data[d[0]][d[1]][d[2]][d[3]];
    });

    $("[data-post]").click(function(){
      //data.resources.food.total += 1;
      //localStorage.setItem('foodtotal', data.resources.food.total);
    });

  }



};
game.init();
