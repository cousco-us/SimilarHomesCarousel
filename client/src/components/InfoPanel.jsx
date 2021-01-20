import React from 'react';

const InfoPanel = ({ listing }) => {
  const {
    price, recentPriceChange, bedrooms, bathrooms, size, addressLineOne, city, state, agency
  } = listing;
  console.log(price);
  return (
    <div>
      <div>{price}</div>
      <div>{recentPriceChange}</div>
      <div>{bedrooms}</div>
      <div>{bathrooms}</div>
      <div>{size}</div>
      <div>{addressLineOne}</div>
      <div>{city}</div>
      <div>{state}</div>
      <div>{agency}</div>
    </div>
  );
};

// InfoPanel.propTypes = {
//   price: PropTypes.int.isRequired,
//   recentPriceChange: PropTypes.bool.isRequired,
//   bathrooms: PropTypes.int.isRequired,
//   bedrooms: PropTypes.int.isRequired,
//   size: PropTypes.int.isRequired,
//   addressLineOne: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   state: PropTypes.string.isRequired,
//   agency: PropTypes.string.isRequired,
// };

export default InfoPanel;
