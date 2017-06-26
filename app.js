var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var home = require('./app/controller/index');
var demo = require('./app/controller/demo');
var settings = require('./app/controller/settings');
var documentation = require('./app/controller/documentation');


// All environments
app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'pug');

// Set static path
app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', home);
app.use('/demo', demo);
app.use('/settings', settings);
app.use('/documentation', documentation);

// Express Server Setup
app.listen(app.get('port'), function (err) {
	if(err) {
		console.log('Express Server Error!');
	} else {
		console.log('Express server listening on port ' + app.get('port'));
	}
});
