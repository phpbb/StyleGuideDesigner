var http = require('http');
var path = require('path');
var express = require('express');

var app = express();

// All environments
app.set('port', process.env.PORT || 3000);
app.set('views', './views/template');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'assets')));

// Routes
app.get('/', function (req, res) {
	res.render('index');
});

app.get('/demo', function (req, res) {
	res.render('demo');
});

app.get('/documentation', function (req, res) {
	res.render('documentation');
});

app.get('/settings', function (req, res) {
	res.render('settings');
});

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
