#! /usr/bin/env node
'use strict';
exports.__esModule = true;
var convert_1 = require('./convert');
(function () {
  var args = process.argv.slice(2);
  var input = args[0];
  console.log((0, convert_1.convert)(input));
})();
