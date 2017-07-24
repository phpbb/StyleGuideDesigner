'use strict';

var config = module.exports = {};

var fs = require('fs');

config.data = [];

config.update = function (req) {
	config.get();
	config.set(req);
	config.write();
};

config.get = function () {
	var data = require('../config.json');

	config.data = data;
	return data;
};

config.set = function (req) {
	var newConfig = {
		id: req.body.id,
		name: req.body.name,
		setting: req.body.setting
	};
	config.data[newConfig.id - 1] = newConfig;
};

config.write = function () {
	// Note: data has to be a string, before sending it to the server
	var data = JSON.stringify(config.get());
	fs.writeFile('app/config.json', data, 'utf8');
};
