var fs = require('fs');
	express = require('express');
	router = express.Router();
	configData = require('./config.json');
	configController = require('./controller/settings');

// Route to CREATE a config
router.post('/configs', function (req, res) {
	configData = configController.config(configData, req);
	console.log(configData);
	res.json(configData);
	/* writeFIle function, added the path, config data string, utf encoding
	and a callback for any possible errors*/
	// fs.writeFile('../config.json', configData, 'utf8', function (err) {
	// 	if (err) {
	// 		return console.log(err);
	// 	}
	// });
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