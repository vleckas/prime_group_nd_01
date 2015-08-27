var express = require('express');
var employee = require('./employeeProfile.js');
var index = require('./routes/index.js');
var path = require('path');
var cors = require('cors');
var app = express();

app.use(cors());
app.use('/', index);
app.use('/scripts', express.static(path.join(__dirname, './node_modules/bootstrap/dist')));
//app.use('/bootstrap', express.static(path.join(__dirname, './bootstrapTemplate')));

app.get('/employee', function(req,res,next){
    res.send(employee());
});

var server = app.listen(process.env.PORT || 3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening on port: ', port);
});