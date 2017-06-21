var express = require('express');
var router = express.Router();

var setconfig = require('../test.json')

router.get('/get', function (req, res) {
	res.send(setconfig);
})


// window.onload = function () {
// 	var app = new Vue({
// 		el: '.app',
// 		data: {
// 			message: 'hey'
// 		}
// 	})
// }

module.exports = router;
