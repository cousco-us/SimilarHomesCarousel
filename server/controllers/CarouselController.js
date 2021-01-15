const CarouselModel = require('../models/CarouselModel.js');

const getListings = (request, response) => {
  const { search } = request.query;
  CarouselModel.getListings(search, (err, listings) => {
    if (err) {
      response.status(400).send(err);
    } else {
      response.status(200).send(listings);
    }
  });
};

module.exports = {
  getListings,
};
