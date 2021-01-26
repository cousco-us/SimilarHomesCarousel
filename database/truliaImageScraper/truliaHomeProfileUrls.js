const truliaProfileElements = require('./truliaProfileElements');
const getTruliaHomeProfileUrls = require('./getTruliaHomeProfileUrls');

const truliaHomeProfileUrls = getTruliaHomeProfileUrls(truliaProfileElements);

module.exports = truliaHomeProfileUrls;
