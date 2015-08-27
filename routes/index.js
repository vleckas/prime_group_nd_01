var express = require('express');
var router = express.Router();
var path = require('path');

//serve the index.html
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../public/'));
});

//serve the js files
router.get('/js/scripts.js', function(req,res){
    res.sendFile(path.join(__dirname, '../public/js/scripts.js'));
});

router.get('/js/jquery-2.1.4.min.js', function(req,res){
    res.sendFile(path.join(__dirname, '../public/js/jquery-2.1.4.min.js'));
});

router.get('/js/handlebars-v3.0.3.js', function(req,res){
    res.sendFile(path.join(__dirname, '../public/js/handlebars-v3.0.3.js'));
});

//serve the css
router.get('/styles.css', function(req,res){
    res.sendFile(path.join(__dirname, '../public/styles.css'));
});

module.exports = router;