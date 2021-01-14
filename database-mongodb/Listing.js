const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  images: Array,
  price: Number,
  size: Number,
  bedrooms: Number,
  bathrooms: Number,
  addressLineOne: String,
  addressLineTwo: String,
  agency: String,
  recentPriceChange: String,
  new: Boolean,
  forSaleByOwner: Boolean
}
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
