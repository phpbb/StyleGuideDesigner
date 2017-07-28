'use strict';

var fs = require('fs');
var model = require('../models/sidebar.js');

var sidebar = module.exports = {};

var dataAll = fs.readdirSync('tests/all/scss');
var dataProsilver = fs.readdirSync('tests/prosilver/scss');

// Logic to read an array files inside a directory
sidebar.get = function () {
	var allData = dataAll;
	var prosilverData = dataProsilver;
	var localData = model.newData;
	for (var i = 0; i < allData.length; i++) {
		if (allData[i] === 'base' || allData[i] === 'settings' || allData[i] === 'objects' || allData[i] === 'components') {
			localData.push(allData[i]);
		}
	}
	localData.push('--------------');
	for (var j = 0; j < prosilverData.length; j++) {
		if (prosilverData[j] === 'theme' || prosilverData[j] === 'components' || prosilverData[j] === 'objects') {
			localData.push(prosilverData[j]);
		}
	}
	var swap = localData[1];
	localData[1] = localData[3];
	localData[3] = swap;

	return localData;
};
