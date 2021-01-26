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

const likeListing = (request, response) => {
  const { id } = request.params;
  CarouselModel.likeListing(id, (err, data) => {
    if (err) {
      response.status(400).send(err);
    } else {
      response.status(200).send(data);
    }
  });
};

const unlikeListing = (request, response) => {
  CarouselModel.unlikeListing(request, (err, data) => {
    if (err) {
      response.status(400).send(err);
    } else {
      response.status(200).send(data);
    }
  });
};

const dropListings = (request, response) => {
  CarouselModel.dropListings((err, data) => {
    if (err) {
      response.status(400).send(err);
    } else {
      response.status(200).send(data);
    }
  });
};

module.exports = {
  getListings,
  likeListing,
  unlikeListing,
  dropListings,
};
