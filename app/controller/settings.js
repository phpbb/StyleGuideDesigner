var config = module.exports = {};

var fs = require('fs');

config.data = [];

config.update = function (req) {
	var data = config.get();
	var newConfig = config.set(req);
	data[newConfig.id - 1] = newConfig;
	return data;
};

config.get = function() {
	var data = config.data;
	data = require('../config.json');
	return data;
};

config.set = function(req) {
	var newConfig = {
		id: req.body.id,
		name: req.body.name,
		setting: req.body.setting
	};
	return newConfig;
};
