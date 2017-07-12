var config = module.exports = {};

var fs = require('fs');
config.data = [];

config.update = function (req) {

	var data = config.get(req);
	config.set()[data.id - 1] = data;
	
	return config.set();
};

config.get = function(req) {
	return {
		id: req.body.id,
		name: req.body.name,
		setting: req.body.setting
	};
};

config.set = function() {
	config.data = require('../config.json');
	return config.data;
};
