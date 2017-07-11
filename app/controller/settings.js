var config = module.exports = {};

var fs = require('fs');
config.data = require('../config.json');

config.update = function (req) {

	// Update the config object
	config.data[req.body.id - 1] = config.get(req);

	return config.data;
};

config.get = function(req) {
	return {
		id: req.body.id,
		name: req.body.name,
		setting: req.body.setting
	}
};
