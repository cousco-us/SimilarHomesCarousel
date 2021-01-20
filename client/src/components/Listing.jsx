import React from 'react';
import ImagePanel from './ImagePanel.jsx';
import InfoPanel from './InfoPanel.jsx';

const Listing = ({listing, like}) =>  (
  <li>
    <ImagePanel like={like} listing={listing} />
    <InfoPanel listing={listing} />
  </li>
);

export default Listing;
