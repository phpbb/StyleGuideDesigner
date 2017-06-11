var path = require('path');
var express = require('express');

var app = express();

// All environments
app.set('views', './views');
app.set('view engine', 'pug');

// Set static path
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

app.listen(3000);
