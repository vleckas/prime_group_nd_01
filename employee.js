// Load Chance
var Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();
// Use Chance here.
var randomEmployee = {
  name: function(){
      return chance.name();
  }
};

module.exports = randomEmployee;