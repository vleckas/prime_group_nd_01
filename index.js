var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req,res,next){
    res.send("Hello World!")});

//app.use(express.static(path.join(__dirname, './public')));
//app.use('/scripts', express.static(path.join(__dirname, './node_modules/bootstrap/dist/')));


var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening on port: ',host, port);
});