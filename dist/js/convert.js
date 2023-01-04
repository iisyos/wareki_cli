'use strict';
exports.__esModule = true;
exports.convert = void 0;
var today = function () {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  return ''.concat(year, '-').concat(month, '-').concat(date);
};
var convert = function (input) {
  var timeFormat = { era: 'long' };
  var date = new Date(input !== null && input !== void 0 ? input : today());
  return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', timeFormat).format(date);
};
exports.convert = convert;
