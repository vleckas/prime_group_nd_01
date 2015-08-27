var companyNames = ['Apple', 'Acme', 'The Joke Joint', 'Comedy Central', 'HBO', 'Prime Academy', 'PBS'];

$(document).ready(function(){
    var $generate = $('#generateProject');
    var $button = $('<button>');
    var $button2 = $('<button>');
    var $newDiv = $('<div>');
    $newDiv.attr('id', 'members');
    //declare project, team, sprints variables
    var project, team, sprints;
    //handlebars stuff
    var source   = $("#project-template").html();
    var template = Handlebars.compile(source);

    $generate.on('click', function(e){
        e.preventDefault();
        project = new Project;

        $('#project').html(template(project));
        $newDiv.empty();
        $('#team').empty();
        $button.text('Assign Staff');
        $button.attr('id', 'assign');
        $('#project').append($button);
        //$('#members').empty();
    });

    $('#project').on('click', '#assign', function(){
        $newDiv.empty();
        team = new Team;
        assignStaff();
    });

    $('#team').on('click', '#add', function(){
        $('#sprints').empty();
        assignOne();
    });

    function addOne(obj){
        team.members.push(obj);
        var $member = obj;
        var $newP = $('<p>');
        $newP.text("Name: " + $member.name + " Skill: " + $member.skill + " Points: " + $member.points);
        $newDiv.append($newP);
    }

    function addTeam(obj){

        for(var prop in obj){
            if(obj[prop] == 'Front End'){
                team.frontEnd += obj.points;
            }
            if(obj[prop] == 'Client Side'){
                team.client += obj.points;
            }
            if(obj[prop] == 'Server Side'){
                team.server += obj.points;
            }
        }

        //if not all 3 skills are satisfied, generate new employee
        if(team.server  == 0 || team.client == 0 || team.frontEnd == 0){
            assignStaff();
        }

        //push team member to array
        team.members.push(obj);

        //add team member to DOM

        var $member = obj;
        var $newP = $('<p>');
        $newP.text("Name: " + $member.name + " Skill: " + $member.skill + " Points: " + $member.points);
        $newDiv.append($newP);

        //append new team to div, add additional employee button
        $('#team').html($newDiv);
        $button2.text('Add Additional Employee');
        $button2.attr('id', 'add');
        $('#team').append($button2);

        var sprints = calculateSprints();
        var $newP2 = $('<p>');
        $newP2.text("Number of Sprints Required: " + sprints);
        $('#team').append($newP2);

        return team;
    }


    var calculateSprints = function (){
            sprints = [];
            var frontEndsprint = Math.ceil(project.frontEnd/team.frontEnd);
            var serverSprint = Math.ceil(project.server/team.server);
            var clientSprint = Math.ceil(project.client/team.client);
            sprints.push(frontEndsprint,serverSprint,clientSprint);
            var maxSprints = getMaxOfArray(sprints);

            return maxSprints;
    };

//ajax call to get staff
    function assignStaff(){
        $.ajax ({
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            url: 'http://127.0.0.1:3000/employee',
            complete: function() {
                console.log('ajax complete');
            },
            success: addTeam,
            error: function(){
                console.log('error!');
            }
        });
    }

    //ajax call to get add one employee
    function assignOne(){
        $.ajax ({
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            url: 'http://127.0.0.1:3000/employee',
            complete: function() {
                console.log('ajax complete');
            },
            success: addOne,
            error: function(){
                console.log('error!');
            }
        });
    }

//company object constructor
    var Project = function(companyName, frontEnd, client, server){
        this.companyName = getCompanyName();
        this.frontEnd = getRandomNumber(10,60);
        this.client = getRandomNumber(10,60);
        this.server = getRandomNumber(10,60);
    };

    //team object constructor
    var Team = function(members, frontEnd, client, server){
            this.members = [];
            this.frontEnd = 0,
            this.server = 0,
            this.client = 0
    };

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getCompanyName(){
        return companyNames[getRandomNumber(0, companyNames.length-1)];
    }

    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
});