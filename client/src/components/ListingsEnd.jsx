import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign } from '@fortawesome/free-solid-svg-icons';

class ListingsEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  initial state
      buttonMessage: 'Take a look',
      clicked: false,
    };
    // bind handlers
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick
  handleClick() {
    const { clicked } = this.state;
    if (!clicked) {
      this.setState({
        buttonMessage: 'Took a look',
        clicked: true,
      });
    } else {
      this.setState({
        buttonMessage: 'Take a look',
        clicked: false,
      });
    }
  }

  render() {
    const { city } = this.props;
    const { buttonMessage } = this.state;

    return (
      <li className="listingCard">
        <div className="listingsEndContainers">
          <div className="iconContainer"><FontAwesomeIcon icon={faSign} /></div>
          <div className="textContainer">
            <div className="seeMoreText">See more homes for sale in</div>
            <div className="cityName">{city}</div>
          </div>
          <div className="buttonContainer">
            <button className="takeALookButton" onClick={() => this.handleClick()} type="button">{buttonMessage}</button>
          </div>
        </div>
      </li>
    );
  }
}

export default ListingsEnd;
