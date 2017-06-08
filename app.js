var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

//All environments
app.set('port', process.env.PORT || 3000);
app.set('views', './views/template');
app.set('view engine', 'pug');

app.use('/assets', express.static(__dirname + "/assets"));

//Routes
app.get('/', function(req, res){
	res.render('index');
});

app.get('/demo', function(req, res){
	res.render('demo');
});

app.get('/documentation', function(req, res){
	res.render('documentation');
});

app.get('/settings', function(req, res){
	res.render('settings');
});


var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});