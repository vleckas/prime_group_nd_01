var companyNames = ['Apple', 'Acme', 'The Joke Joint', 'Comedy Central', 'HBO', 'Prime Academy', 'PBS'];

$(document).ready(function(){
    $generate = $('#generateProject');
    $button = $('<button>');
    var project;
    var team = [];

    var source   = $("#project-template").html();
    var template = Handlebars.compile(source);

    $generate.on('click', function(e){
        e.preventDefault();
        project = new Project;
        $('#project').html(template(project));
        $button.text('Assign Staff');
        $button.attr('id', 'assign');
        $('#project').append($button);
    });

    $('#project').on('click', '#assign', function(){
        //assignStaff();
        calculateSprints();
    });


    function calculateSprints(){
        var points = {
            frontEnd: 0,
            client: 0,
            server: 0
        };

        team.forEach(function(object){
            for (var prop in object){
                if(object[prop] == 'Front End'){
                    points.frontEnd += object.points;
                }
                if(object[prop] == 'Client Side'){
                    points.client += object.points;
                }
                if(object[prop] == 'Server Side'){
                    points.server += object.points;
                }
            }
        });
                return points;
    }

//ajax call to get staff
    function assignStaff(){
        console.log('getting staff!');
        $.ajax ({
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            url: '',
            complete: function() {
                console.log('ajax complete');
            },
            success: function(data) {
                searchCallback(data.results);
            },
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

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getCompanyName(){
        return companyNames[getRandomNumber(0, companyNames.length-1)];
    }
});