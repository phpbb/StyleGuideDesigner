var config = module.exports = {};

var fs = require('fs');

config.data = [];

config.update = function (req) {
	var data = config.get();
	var newConfig = {
		id: req.body.id,
		name: req.body.name,
		setting: req.body.setting
	};
	
	data[newConfig.id - 1] = newConfig;
	config.set(data);
	return data;
};

config.get = function() {
	config.data = require('../config.json');
	return config.data;
};

config.set = function(data) {
	fs.writeFile('../config.json', data, 'utf8', function (err) {
		if (err) {
			return console.log(err);
		}
	});
};
