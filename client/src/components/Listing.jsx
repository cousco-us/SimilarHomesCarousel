import React from 'react';
// eslint-disable-next-line import/extensions
import ImagePanel from './ImagePanel.jsx';
// eslint-disable-next-line import/extensions
import InfoPanel from './InfoPanel.jsx';

// eslint-disable-next-line react/prop-types
const Listing = ({listing, like, unlike}) =>  (
  <li className="listingCard">
    <ImagePanel
      like={like}
      unlike={unlike}
      listing={listing}
    />
    <InfoPanel
      listing={listing}
    />
  </li>
);

export default Listing;
