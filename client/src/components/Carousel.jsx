import React from 'react';
import Listing from './Listing.jsx';
import ListingsEnd from './ListingsEnd.jsx';

const Carousel = (props) => (
  const { listings } = props;
<div>
  <ul>
    {listings.map(listing => {
      return (<Listing like={props.like} listing={listing} />)
    })}
    <ListingsEnd />
  </ul>
</div>
);

export default Carousel;
