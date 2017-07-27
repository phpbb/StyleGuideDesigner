'use strict';

var model = require('../models/model.js');
var fs = require('fs');

var sidebar = module.exports = {};


// Logic to Read an array files inside a directory
sidebar.getDir = function () {
	var readFile = fs.readdir('tests/all/scss/objects', function(err, items) {
		for (var i=0; i<items.length; i++) {
			console.log(items[i]);
		}
	});
};

// Logic to read file
sidebar.getFile = function () {
	var readFile = fs.readdir('tests/all/scss/objects/_button.scss', 'utf8');
	return readFile;
};
