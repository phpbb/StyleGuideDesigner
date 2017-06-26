var express = require('express');
var router = express.Router();

var jsonObj = require('../test.json');

// Route to CREATE a config
router.post('/configs', function (req, res) {
	res.json({response: "You sent a post request!"});
});

// Route to READ all the configs
router.get('/configs', function (req, res) {
	res.json({response: "You sent a get request!"});
});

// Route to READ a single config
router.get('/configs/:configID', function (req, res) {
	res.json({response: "You sent a get request with ID - " + req.params.configID});
});

// Route to UPDATE a single config with the corresponding ID
router.put('/configs/:configID', function (req, res) {
	res.json({response: "You sent a update request with ID - " + req.params.configID});
});

// Route to DELETE a single config with the corresponding ID
router.delete('/configs/:configID', function (req, res) {
	res.json({response: "You sent a delete request with ID - " + req.params.configID});
});

/* Render settings page*/
router.get('/', function (req, res, next) {
	res.render('settings');
})

module.exports = router;
