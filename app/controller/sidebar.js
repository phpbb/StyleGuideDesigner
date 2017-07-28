'use strict';

var model = require('../models/model.js');

var sidebar = module.exports = {};

// Logic to read an array files inside a directory
sidebar.get = function () {
	var newData = [];
	var allData = model.data1;
	var prosilverData = model.data2;
	for (var i = 0; i < allData.length; i++) {
		if (allData[i] === 'base' || allData[i] === 'settings' || allData[i] === 'objects' || allData[i] === 'components') {
			newData.push(allData[i]);
		}
	}
	newData.push('--------------');
	for (var j = 0; j < prosilverData.length; j++) {
		if (prosilverData[j] === 'theme' || prosilverData[j] === 'components' || prosilverData[j] === 'objects') {
			newData.push(prosilverData[j]);
		}
	}
	var swap = newData[1];
	newData[1] = newData[3];
	newData[3] = swap;

	return newData;
};
