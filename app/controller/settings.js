var express = require('express');
var router = express.Router();

var jsonObj = require('../test.json');

// Route to CREATE a config
router.post('/configs', function (req, res) {
	res.json({response: "You sent a POST request!"});
});

// Route to READ all the configs
router.get('/configs', function (req, res) {
	res.json({response: "You sent a GET request!"});
});

// Route to READ a single config
router.get('/configs/:configID', function (req, res) {
	res.json({response: "You sent a GET request with ID - " + req.params.configID});
});

// Route to UPDATE a single config with the corresponding ID
router.put('/configs/:configID', function (req, res) {
	res.json({response: "You sent a UPDATE request with ID - " + req.params.configID});
});

// Route to DELETE a single config with the corresponding ID
router.delete('/configs/:configID', function (req, res) {
	res.json({response: "You sent a DELETE request with ID - " + req.params.configID});
});

// Render settings page
router.get('/', function (req, res, next) {
	res.render('settings');
})

module.exports = router;
