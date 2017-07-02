var express = require('express');
var router = express.Router();

var configData = require('../test.json');
var config = configData;

// Route to CREATE a config
router.post('/configs', function (req, res) {
	// res.json({response: "You sent a POST request!"});
	newConfig = req.body;
	res.json(newConfig);
	configData = newConfig;
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
