import React from 'react';
import Listing from './Listing.jsx';
import ListingsEnd from './ListingsEnd.jsx';

const Carousel = ({ listings, like }) => {
  return (
  <div>
    <ul>
      {listings.map((listing, index) => <Listing key={index} like={like} listing={listing} />)}
      <ListingsEnd />
    </ul>
  </div>
)
};

export default Carousel;
