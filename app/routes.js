'use strict';

var	express = require('express');
var	config = require('./controller/config');
var	sidebar = require('./controller/sidebar');

var	router = express.Router();

// Route to UPDATE the config
router.post('/settings/config', function (req, res) {
	req.params.update = config.update(req);
	res.send(req.params.update);
});

// Route to READ the config
router.get('/settings/config', function (req, res) {
	req.params.fetch = config.get();
	res.send(req.params.fetch);
});

// Render settings page
router.get('/settings', function (req, res) {
	res.render('settings');
});

// Render editors page
router.get('/editor', function (req, res) {
	res.render('editor');
});

// Route to READ the file
router.get('/editor/sidebar', function (req, res) {
	req.params.fetch = sidebar.get();
	res.send(req.params.fetch);
});

module.exports = router;
