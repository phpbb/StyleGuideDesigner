'use strict';

var model = require('../models/model.js');
var fs = require('fs');

var sidebar = module.exports = {};

// Logic to read an array files inside a directory
sidebar.get = function () {
	var data1 = fs.readdirSync('tests/all/scss');
	var data2 = fs.readdirSync('tests/prosilver/scss');
	var newData = [];
	for(var i=0; i<data1.length; i++) {
		if(data1[i] == 'base' || data1[i] == 'components' || data1[i] == 'objects' || data1[i] == 'settings') {
			newData.push(data1[i]);
		}
	}
	for(var j=0; j<data2.length; j++) {
		if(data2[j] == 'theme' || data2[j] == 'components') {
			newData.push(data2[j]);
		}
	}
	return newData;
};
