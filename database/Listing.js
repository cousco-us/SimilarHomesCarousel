const mongoose = require('mongoose');
// const db = require('./index.js');

mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  images: Array,
  price: String,
  size: String,
  bedrooms: Number,
  bathrooms: Number,
  addressLineOne: String,
  city: String,
  state: String,
  agency: String,
  recentPriceChange: String,
  isNewListing: Boolean,
  forSaleByOwner: Boolean,
  liked: Boolean,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
