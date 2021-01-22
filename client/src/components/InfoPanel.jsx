import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faSink, faRulerCombined, faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

const determinePriceChangeArrow = (priceChange) => {
  if (priceChange === 'noChanges') {
    return '';
  } if (priceChange === 'raised') {
    return <FontAwesomeIcon className="upArrow" icon={faLongArrowAltUp} />;
  } if (priceChange === 'lowered') {
    return <FontAwesomeIcon className="downArrow" icon={faLongArrowAltDown} />;
  }
};

const agencyOrNot = (forSaleByOwner, agency) => {
  if (!forSaleByOwner) {
    return (
      <div className="agencyContainer">
        <div className="agencyContent">{agency}</div>
      </div>
    );
  }
};

const InfoPanel = ({ listing }) => {
  const {
    price, recentPriceChange, bedrooms, bathrooms, size, addressLineOne, city, state, agency, forSaleByOwner
  } = listing;
  return (
    <div className="infoPanel">
      <div className="infoPanelOuterBox">
        <div className="infoPanelInnerBox">
          <div className="priceContainer">
            <div className="priceContent">${price} {determinePriceChangeArrow(recentPriceChange)}</div>
          </div>
          <div className="houseSpecsContainer">
            <div className="houseSpec"><FontAwesomeIcon className="infoPanelIcon" icon={faBed} /> {bedrooms}bd</div>
            <div className="houseSpec"><FontAwesomeIcon className="infoPanelIcon" icon={faSink} /> {bathrooms}ba</div>
            <div className="houseSpec"><FontAwesomeIcon className="infoPanelIcon" icon={faRulerCombined} /> {size} sqft</div>
          </div>
          <div className="streetAddressContainer">{addressLineOne}</div>
          <div className="cityAddressContainer">{city}, {state}</div>
        </div>
      </div>
      {agencyOrNot(forSaleByOwner, agency)}
    </div>

  );
};

export default InfoPanel;
