import Building = require('./building');
import Collection = require('./collection');

let hut:Building = new Building('Hut', 0, 15, 150, 'Air conditioning would be nice though.', '+1 <img src="img/happy.png">');
let granary:Building = new Building('Granary', 0, 25, 250, 'Feeds all your cute animals.', '+200 <img src="img/food.png"> max');

let buildings:Collection = new Collection('Buildings', [hut, granary])

// name:string, amount:number, prodCost:number, cashCost:number, description:string, effect:string

export = buildings;
