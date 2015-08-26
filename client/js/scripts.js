/**
 * Created by stalker_1 on 8/26/15.
 */
$(document).ready(function(){
    $generateProject = $('#generateProject');

    var source   = $("#project-template").html();
    var template = Handlebars.compile(source);


    $generateProject.on('click', function(e){
        e.preventDefault();

        var project = new Project;
        $('#project').html(template(project));

    })



    var companyNames = ['Apple', 'Acme', 'The Joke Joint', 'Comedy Central', 'HBO', 'Prime Academy', 'PBS'];

//company object constructor
    var Project = function(companyName, frontEndPts, clientLogic, serverLogic){
        this.companyName = getCompanyName();
        this.frontEndPts = getRandomNumber(10,60);
        this.clientLogic = getRandomNumber(10,60);
        this.serverLogic = getRandomNumber(10,60);
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getCompanyName(){
        return companyNames[getRandomNumber(0, companyNames.length-1)];
    }
});