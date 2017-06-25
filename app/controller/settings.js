var express = require('express');
var router = express.Router();

var jsonObj = require('../test.json');

/* GET settings page*/
router.get('/', function (req, res, next) {
	res.render('settings', {config: jsonObj.message});
})

module.exports = router;
