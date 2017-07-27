'use strict';

var model = require('../models/model.js');
var fs = require('fs');

var sidebar = module.exports = {};

// Logic to read an array files inside a directory
sidebar.get = function () {
	var data = fs.readdirSync('tests/all/scss');
	return data;
};
