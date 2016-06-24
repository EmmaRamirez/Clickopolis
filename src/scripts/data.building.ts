import Building = require('./building');
import Collection = require('./collection');

let hut:Building = new Building('Hut', 0, 15, 150, 'Air conditioning would be nice though.', '+1 <img src="img/happy.png">');
let granary:Building = new Building('Granary', 0, 25, 250, 'Feeds all your cute animals.', '+200 <img src="img/food.png"> max');
let barracks:Building = new Building('Barracks', 0, 35, 350, 'Keep your soldiers at the ready!', '+1 <img src="img/strength.png">');
let temple:Building = new Building('Temple', 0, 45, 450, 'Cultivate your empire\'s faith.', '+1 <img src="img/faith.png"> PM');
let asclepeia:Building = new Building('Asclepeia', 0, 50, 500, 'We can\'t pronounce it either.', '+1 <img src="img/health.png">')

let buildings:Collection = new Collection('Buildings',
                                          [
                                            hut, granary, barracks, temple, asclepeia
                                          ])

// name:string, amount:number, prodCost:number, cashCost:number, description:string, effect:string

export = buildings;
