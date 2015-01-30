var async = require('async');
var baz = require('./bar/baz');

exports.run = function (values, callback) {
    async.map(values, function (v, next) {
        next(null, baz(v));
    }, callback);
};