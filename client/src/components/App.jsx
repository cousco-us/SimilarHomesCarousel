import React from 'react';
import { ajax } from 'jquery';
// eslint-disable-next-line import/extensions
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Similar Homes You May Like',
      listings: [],
    };
    this.getListings = this.getListings.bind(this);
    this.likeListing = this.likeListing.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    ajax({
      url: '/api/listings',
      method: 'GET',
      dataType: 'json',
      success: (response) => {
        this.setState({
          listings: response,
        });
        // this.renderView();
      },
      // eslint-disable-next-line no-console
      error: console.log,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  likeListing(id) {
    ajax({
      url: `/api/listings/${id}`,
      method: 'PATCH',
      success: () => {
        // implement something to show like
      },
      // eslint-disable-next-line no-console
      error: console.log,
    });
  }

  render() {
    const { headline, listings } = this.state;
    return (
      <div>
        <div>{headline}</div>
        <Carousel like={this.likeListing} listings={listings} />
      </div>
    );
  }
}

export default App;
