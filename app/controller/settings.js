var config = module.exports = {};

var fs = require('fs');
config.data = require('../config.json');

config.update = function (req) {
	// This is temporary
	config.data.push({
		'id': config.data.length + 1,
		'name': 'new addition',
		'setting': req.body.setting
	});
	return config.data;
	/* writeFile function, added the path, config data string, utf encoding
	and a callback for any possible errors*/
	fs.writeFile('../config.json', config.data, 'utf8', function (err) {
		if (err) {
			return console.log(err);
		}
	});
};
