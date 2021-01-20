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
      <li>
        <div>
          <FontAwesomeIcon icon={faSign} />
          <h2>See more homes for sale in</h2>
          <h1>{city}</h1>
          <button>Take a look</button>
        </div>
      </li>
    );
  }
}

export default ListingsEnd;
