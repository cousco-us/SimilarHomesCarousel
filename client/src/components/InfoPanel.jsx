import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faSink, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const InfoPanel = ({ listing }) => {
  const {
    price, recentPriceChange, bedrooms, bathrooms, size, addressLineOne, city, state, agency
  } = listing;
  return (
    <div className="infoPanel">
      <div className="infoPanelOuterBox">
        <div className="infoPanelInnerBox">
          <div className="priceContainer">
            <div className="priceContent">${price}</div>
          </div>
          <div className="houseSpecsContainer">
            <div className="houseSpec"><FontAwesomeIcon icon={faBed} />{bedrooms}bd</div>
            <div className="houseSpec"><FontAwesomeIcon icon={faSink} />{bathrooms}ba</div>
            <div className="houseSpec"><FontAwesomeIcon icon={faRulerCombined} />{size} sqft</div>
          </div>
          <div className="streetAddressContainer">{addressLineOne}</div>
          <div className="cityAddressContainer">{addressLineOne}</div>
        </div>
      </div>
      <div className="agencyContainer">
        <div className="agencyContent">{agency}</div>
      </div>
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


