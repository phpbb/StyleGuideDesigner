'use strict';

var fs = require('fs');

var model = module.exports = {};

model.data1 = fs.readdirSync('tests/all/scss');
model.data2 = fs.readdirSync('tests/prosilver/scss');
