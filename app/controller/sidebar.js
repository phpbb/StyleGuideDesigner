'use strict';

var model = require('../models/model.js');
var fs = require('fs');

var sidebar = module.exports = {};

// Logic to read an array files inside a directory
sidebar.get = function () {
	var data = fs.readdirSync('tests/all/scss');
	var newData = [];
	for(var i=0; i<data.length; i++) {
		if(data[i] == 'base' || data[i] == 'components' || data[i] == 'objects' || data[i] == 'settings') {
			newData.push(data[i]);
		}
	}
	return newData;
};
