var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

//all environments
app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'pug');

var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});