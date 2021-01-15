const Listing = require('../../database/Listing.js');
const db = require('../../database/index.js');

const getListings = (search, callback) => {
  Listing.find((err, listings) => {
    if (err) return console.error(err);
    callback(err, listings);
  });
};

module.exports = {
  getListings,
};
