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
	var data = config.get();
	fs.writeFile('../config.json', data, 'utf8', function (err) {
		if (err) {
			return console.log(err);
		}
	});
};
