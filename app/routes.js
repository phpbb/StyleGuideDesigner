'use strict';

var	express = require('express');
var	config = require('./controller/settings');

var	router = express.Router();

// Route to UPDATE the config
router.post('/configs', function (req, res) {
	var configData = config.update(req);
	console.log(configData);
	res.send(configData);
});

// Route to READ the configs
router.get('/configs', function (req, res) {
	var configData = config.data;
	res.json(configData);
});

// Render settings page
router.get('/', function (req, res) {
	res.render('settings');
});

module.exports = router;
