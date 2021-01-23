import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faSink, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const determinePriceChangeArrow = (priceChange) => {
  if (priceChange === 'noChanges') {
    return '';
  } if (priceChange === 'raised') {
    return (
      <div className="priceIconContainer">
        <svg className="priceIcon" data-testid="property-trend-down" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path className="raisedPath" d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" /></svg>
      </div>
    );
  } if (priceChange === 'lowered') {
    return (
      <div className="priceIconContainer">
        <svg className="priceIcon" data-testid="property-trend-down" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path className="loweredPath" d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" /></svg>
      </div>
    );
  }
  return null;
};

const agencyOrNot = (forSaleByOwner, agency) => {
  if (!forSaleByOwner) {
    return (
      <div className="agencyContainer">
        <div className="agencyContent">{agency}</div>
      </div>
    );
  }
  return null;
};

const InfoPanel = ({ listing }) => {
  const {
    price, recentPriceChange, bedrooms, bathrooms, size,
    addressLineOne, neighborhood, city, state, agency,
    forSaleByOwner
  } = listing;
  return (
    <div className="infoPanel">
      <div className="infoPanelOuterBox">
        <div className="infoPanelInnerBox">
          <div className="priceContainer">
            <div className="priceContent">
              {`$${price}`}
            </div>
            {determinePriceChangeArrow(recentPriceChange)}
          </div>
          <div className="houseSpecsContainer">
            <div className="houseSpec">
              <FontAwesomeIcon className="infoPanelIcon" icon={faBed} />
              {` ${bedrooms}bd`}
            </div>
            <div className="houseSpec">
              <FontAwesomeIcon className="infoPanelIcon" icon={faSink} />
              {` ${bathrooms}ba`}
            </div>
            <div className="houseSpec">
              <FontAwesomeIcon className="infoPanelIcon" icon={faRulerCombined} />
              {` ${size} sqft`}
            </div>
          </div>
          <div className="streetAddressContainer">{addressLineOne}</div>
          <div className="cityAddressContainer">
            {`${neighborhood}, ${city}, ${state}`}
          </div>
        </div>
      </div>
      {agencyOrNot(forSaleByOwner, agency)}
    </div>

  );
};

export default InfoPanel;
