var format = require('util').format;

module.exports = function (v) {
    if (typeof v === "string") {
        return format('%s OK.', v);
    } else if (typeof v === "number") {
        return v * 10;
    } else {
        return v;
    }
};