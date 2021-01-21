import React from 'react';
import ImagePanel from './ImagePanel.jsx';
import InfoPanel from './InfoPanel.jsx';

const Listing = ({listing, like, unlike}) =>  (
  <li className="listingCard">
    <ImagePanel like={like} unlike={unlike} listing={listing} />
    <InfoPanel listing={listing} />
  </li>
);

export default Listing;
