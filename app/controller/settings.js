var express = require('express');
var router = express.Router();
var fs = require('fs');

var configFile = '../test.json';
var configData = require(configFile);
var config = configData;

// Route to CREATE a config
router.post('/configs', function (req, res) {
	// res.json({response: "You sent a POST request!"});
	configData = req.body;
	res.json(configData);
	fs.writeFile(configFile, JSON.stringify(configData, null, 2), function (err) {
		if(err)
			return console.log(err);
		console.log(JSON.stringify(configData));
		console.log('writing to ' + configFile);
	});
});

// Route to READ all the configs
router.get('/configs', function (req, res) {
	// res.cookie('bar', jsonObj.message);
	res.json(configData);
});

// Route to READ a single config
router.get('/configs/:configID', function (req, res) {
	// res.json({response: "You sent a GET request with ID - " + req.params.configID});
	res.json({ID: req.params.configID, message: configData.message});
});

// Route to UPDATE a single config with the corresponding ID
router.put('/configs/:configID', function (req, res) {
	// res.json({response: "You sent a UPDATE request with ID - " + req.params.configID});
	config = req.body;
	res.json({message: 'Config Updated!'});

});

// Route to DELETE a single config with the corresponding ID
router.delete('/configs/:configID', function (req, res) {
	// res.json({response: "You sent a DELETE request with ID - " + req.params.configID});=
	res.json({message: 'Config Deleted Successfully!'})
});

// Render settings page
router.get('/', function (req, res, next) {
	res.render('settings');
})

module.exports = router;
