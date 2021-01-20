import React from 'react';

const InfoPanel = ({ price, recentPriceChange, bedrooms, bathrooms, size, addressLineOne, city, state, agency}) => (

    <div>
      <div>{price}{recentPriceChange}</div>
      <div>{bedrooms}{bathrooms}{size}</div>
      <div>{addressLineOne}</div>
      <div>{city}{state}</div>
      <div>{agency}</div>
    </div>
  );

export default InfoPanel;