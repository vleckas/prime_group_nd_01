// Load Chance
var Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();
// Use Chance here.
var randomSkill = {
  skill: function(){
      return chance.pick(['Front End', 'Client Side', 'Server Side']);
  }
};


module.exports = randomSkill;