'use strict';

var model = require('../models/sidebar');

var sidebar = module.exports = {};

sidebar.getData = function () {
	return model.get();
};
