const Listing = require('../../database/Listing.js');
// eslint-disable-next-line no-unused-vars
const db = require('../../database/index.js');

const getListings = (search, callback) => {
  Listing.find((err, listings) => {
    // eslint-disable-next-line no-console
    if (err) return console.error(err);
    callback(err, listings);
  });
};

const likeListing = (id, callback) => {
  Listing.findOneAndUpdate({ _id: id }, { $set: { liked: true } }, { returnOriginal: false },
    (err, doc) => {
      if (err) {
        console.log('Error liking listing!');
      } else {
        console.log(doc);
        callback(err, doc);
      }
    });
};

const unlikeListing = (id, callback) => {
  Listing.findOneAndUpdate({ _id: id }, { $set: { liked: false } }, { returnOriginal: false },
    (err, doc) => {
      if (err) {
        console.log('Error unliking listing!');
      } else {
        console.log(doc);
        callback(err, doc);
      }
    });
};

module.exports = {
  getListings,
  likeListing,
  unlikeListing,
};
