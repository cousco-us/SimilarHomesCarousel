const Listing = require('../../database/Listing.js');
const db = require('../../database/index.js');

const getListings = (search, callback) => {
  Listing.find((err, listings) => {
    if (err) return console.error(err);
    callback(err, listings);
  });
};

//  needs work
const likeListing = (id, callback) => {
  Listing.updateOne(
    { _id: id },
    {
      $set: { liked: true },
    },
  );
  callback();
};

module.exports = {
  getListings,
  likeListing,
};
