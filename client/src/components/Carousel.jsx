import React from 'react';
import Listing from './Listing.jsx';
import ListingsEnd from './ListingsEnd.jsx';

// eslint-disable-next-line arrow-body-style
const Carousel = ({ listings, like, city }) => {

  return (
    <div className="carousel">
      <div className="carouselContainer">
        <div className="carouselOverflowContainer">
          <div className="carouselGridContainer">
            <ul>
              {listings.map((listing, index) => <Listing key={index} like={like} listing={listing} />)}
              <ListingsEnd city={city} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
