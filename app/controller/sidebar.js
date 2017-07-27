'use strict';

var model = require('../models/model.js');

var sidebar = module.exports = {};

// Logic to read an array files inside a directory
sidebar.get = function () {
	var newData = [];
	var allData = model.data1;
	var prosilverData = model.data2;

	for (var i = 0; i < allData.length; i++) {
		if (allData[i] === 'base' || allData[i] === 'components' || allData[i] === 'objects' || allData[i] === 'settings') {
			newData.push(allData[i]);
		}
	}
	for (var j = 0; j < prosilverData.length; j++) {
		if (prosilverData[j] === 'theme' || prosilverData[j] === 'components') {
			newData.push(prosilverData[j]);
		}
	}
	return newData;
};
