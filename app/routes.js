var	express = require('express');
var	config = require('./controller/settings');

var	router = express.Router();
var configData;

// Route to CREATE a config
router.post('/configs', function (req, res) {
	configData = config.update(req);
	console.log(configData);
	res.json(configData);
});

// Route to READ all the configs
router.get('/configs', function (req, res) {
	configData = config.data;
	res.json(configData);
});

// Render settings page
router.get('/', function (req, res) {
	res.render('settings');
});

module.exports = router;
