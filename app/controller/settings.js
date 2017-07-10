var config = module.exports = {};

var fs = require('fs');
config.data = require('../config.json');

config.update = function (req) {
	// Update the config objects
	config.data[req.body.id - 1] = {
		id: req.body.id,
		name: req.body.name,
		setting: req.body.setting
	}

	/* writeFile function, added the path, config data string, utf encoding
	and a callback for any possible errors*/
	fs.writeFile('../config.json', config.data, 'utf8', function (err) {
		if (err) {
			return console.log(err);
		}
	});
	return config.data;
};
