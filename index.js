var express = require('express');
var employee = require('./employeeProfile.js');
var app = express();

app.get('/', function(req,res,next){
    res.send(employee());
});


var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening on port: ',host, port);
});