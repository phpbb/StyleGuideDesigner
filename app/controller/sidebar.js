'use strict';

var model = require('../models/sidebar.js');

var sidebar = module.exports = {};

sidebar.newData = [];

// Logic to read an array files inside a directory
sidebar.get = function () {
	var allData = model.data1;
	var prosilverData = model.data2;
	for (var i = 0; i < allData.length; i++) {
		if (allData[i] === 'base' || allData[i] === 'settings' || allData[i] === 'objects' || allData[i] === 'components') {
			sidebar.newData.push(allData[i]);
		}
	}
	sidebar.newData.push('--------------');
	for (var j = 0; j < prosilverData.length; j++) {
		if (prosilverData[j] === 'theme' || prosilverData[j] === 'components' || prosilverData[j] === 'objects') {
			sidebar.newData.push(prosilverData[j]);
		}
	}
	var swap = sidebar.newData[1];
	sidebar.newData[1] = sidebar.newData[3];
	sidebar.newData[3] = swap;

	return sidebar.newData;
};
