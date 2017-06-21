var path = require('path');
var express = require('express');
var fs = require('fs');

var app = express();

var settings = require('./app/controller/settings');

// All environments
app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'pug');

// Set static path
app.use(express.static(path.join(__dirname, 'assets')));
app.use('/settings', settings);

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

app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
