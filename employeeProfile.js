var employee = require('./employee.js');
var randSkill = require('./skill.js');
var randPoints = require('./points.js');


var createNewEmployee = function(name, skill, points){
        this.name = employee.name();
        this.skill = randSkill.skill();
        this.points = randPoints.points();
};

var sendNewEmployee = function(){
    return new createNewEmployee();
};


module.exports = sendNewEmployee;