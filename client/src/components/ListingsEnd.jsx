import React from 'react';

class ListingsEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  initial state
      city: this.props.city,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // const { city } = listing;

  handleClick() {
    // handle take a look button click
  }

  render() {
    const { city } = this.state;

    return (
      <li>
        <div>
          <h2>See more homes for sale in</h2>
          <h1>{city}</h1>
          <button>Take a look</button>
        </div>
      </li>
    );
  }
}

export default ListingsEnd;
