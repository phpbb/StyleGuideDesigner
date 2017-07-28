'use strict';

var model = module.exports = {};
var fs = require('fs');

model.newData = [];

// Logic to read an array of files inside a directory
model.get = function () {
	var allData = fs.readdirSync('tests/all/scss');
	var prosilverData = fs.readdirSync('tests/prosilver/scss');
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

	var temp = localData[0];
	localData[0] = localData[1];
	localData[1] = temp;

	return localData;
};