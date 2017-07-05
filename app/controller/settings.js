var fs = require('fs');
var express = require('express');

var router = express.Router();

var configFile = '../test.json';
var configData = require(configFile);

// Route to CREATE a config
router.post('/configs', function (req, res) {
	// Assign the configData variable to the post request body that we get from vue component
	configData = req.body;
	res.json(configData);
	/* writeFIle function, added the path, config data string, utf encoding
	and a callback for any possible errors*/
	fs.writeFile(configFile, JSON.stringify(configData, null, 2), 'utf8', function (err) {
		if (err) {
			return console.log(err);
		}
	});
});

// Route to READ all the configs
router.get('/configs', function (req, res) {
	res.json(configData);
});

// Render settings page
router.get('/', function (req, res) {
	res.render('settings');
});

module.exports = router;
