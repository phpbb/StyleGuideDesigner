var express = require('express');
var router = express.Router();

var json = require('../models/settings');

router.get('/get', function (req, res) {
	res.send(json);
})

module.exports = router;
