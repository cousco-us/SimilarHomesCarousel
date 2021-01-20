import React from 'react';
import ImagePanel from './ImagePanel.jsx';
import InfoPanel from './InfoPanel.jsx';

const Listing = (props) => {
  console.log(props);
  return (
  <li>
    <h1>hello</h1>
    {/* <ImagePanel like={props.like} listing={props.listing} />
    <InfoPanel listing={props.listing} /> */}
  </li>
)};

export default Listing;
