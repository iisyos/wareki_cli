#! /usr/bin/env node
var today = function () {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    return "".concat(year, "-").concat(month, "-").concat(date);
};
(function () {
    var _a;
    var args = process.argv.slice(2);
    var timeFormat = { era: 'long' };
    var input = (_a = args[0]) !== null && _a !== void 0 ? _a : today();
    var date = new Date(input);
    console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese', timeFormat).format(date));
})();
