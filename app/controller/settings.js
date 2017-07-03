var fs = require('fs');
var express = require('express');

var router = express.Router();

var configFile = './test.json';
var configData = require(configFile);

// Route to CREATE a config
router.post('/configs', function (req, res) {
	var data = configData.push(req.body);
	console.log(configData);
	fs.writeFile(configFile, data, function (err) {
		if (err) {
			return console.log(err);
		}
	});
	res.json(configData);
});

// Route to READ all the configs
router.get('/configs', function (req, res) {
	res.json(configData);
});

// Route to READ a single config
router.get('/configs/:configID', function (req, res) {
	res.json({ID: req.params.configID, message: configData.message});
});

// Route to UPDATE a single config with the corresponding ID
router.put('/configs/:configID', function (req, res) {
	configData = req.body;
	res.json({message: 'Config Updated!'});
});

// Route to DELETE a single config with the corresponding ID
router.delete('/configs/:configID', function (req, res) {
	res.json({message: 'Config Deleted Successfully!'});
});

// Render settings page
router.get('/', function (req, res) {
	res.render('settings');
});

module.exports = router;
