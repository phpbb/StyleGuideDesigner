'use strict';

var config = module.exports = {};

config.data = [];

config.update = function (req) {
	config.get();
	config.set(req);
};

config.get = function () {
	var data = require('../config.json');
	config.data = data;
	return config.data;
};

config.set = function (req) {
	var newConfig = {
		id: req.body.id,
		name: req.body.name,
		setting: req.body.setting
	};
	config.data[newConfig.id - 1] = newConfig;
};
