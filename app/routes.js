'use strict';

var	express = require('express');
var	config = require('./controller/config');

var	router = express.Router();

// Route to UPDATE the config
router.post('/config', function (req, res) {
	req.params.update = config.update(req);
	res.send(req.params.update);
});

// Route to READ the config
router.get('/config', function (req, res) {
	req.params.fetch = config.get();
	res.send(req.params.fetch);
});

// Render settings page
router.get('/', function (req, res) {
	res.render('settings');
});

module.exports = router;
