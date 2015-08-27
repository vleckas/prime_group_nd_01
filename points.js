// Load Chance
var Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();
// Use Chance here.
var randomPoints = {
    points: function(){
        return chance.natural({min: 1, max: 9});
    }
};

module.exports = randomPoints;