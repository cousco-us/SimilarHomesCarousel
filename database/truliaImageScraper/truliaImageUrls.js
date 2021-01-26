const truliaElements = require('./truliaElements');
const getTruliaImages = require('./getTruliaImages');

const truliaImageUrls = getTruliaImages(truliaElements);

module.exports = truliaImageUrls;
