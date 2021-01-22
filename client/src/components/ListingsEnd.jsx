import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign } from '@fortawesome/free-solid-svg-icons';

class ListingsEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  initial state

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // handle take a look button click
  }

  render() {
    const { city } = this.props

    return (
      <li className="listingCard">
        <div className="listingsEndContainers">
          <div className="iconContainer"><FontAwesomeIcon icon={faSign} /></div>
          <div className="textContainer">
            <div className="seeMoreText">See more homes for sale in</div>
            <div className="cityName">{city}</div>
          </div>
          <div className="buttonContainer">
            <button className="takeALookButton">Take a look</button>
          </div>
        </div>
      </li>
    );
  }
}

export default ListingsEnd;
