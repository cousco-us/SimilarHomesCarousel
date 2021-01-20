import React from 'react';
import Listing from './Listing.jsx';
import ListingsEnd from './ListingsEnd.jsx';

// eslint-disable-next-line arrow-body-style
const Carousel = ({ listings, like, city }) => {

  return (
    <div>
      <ul>
        {listings.map((listing, index) => <Listing key={index} like={like} listing={listing} />)}
        <ListingsEnd city={city} />
      </ul>
    </div>
  )
};

export default Carousel;
