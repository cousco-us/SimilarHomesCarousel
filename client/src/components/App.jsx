import React from 'react';
import { ajax } from 'jquery';
// eslint-disable-next-line import/extensions
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      city: null,
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
          city: response[0].city,
        });
        this.render();
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
    const { headline, listings, city } = this.state;
    return (
      <div>
        <div className="headline">Similar Homes You May Like</div>
        <Carousel city={city} like={this.likeListing} listings={listings} />
      </div>
    );
  }
}

export default App;
