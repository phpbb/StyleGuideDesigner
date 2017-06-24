var express = require('express');
var router = express.Router();
var fs = require('fs');

var jsonString = fs.readFileSync('./app/test.json', 'utf8');
var jsonObj = JSON.parse(jsonString);

/* GET settings page*/
router.get('/', function (req, res, next) {
	res.render('settings', {config: jsonObj.message});
})

module.exports = router;
