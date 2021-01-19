import React from 'react';
import { ajax } from 'jquery';

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
          listings: response
        });
        this.renderView();
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
        // implement
      },
      // eslint-disable-next-line no-console
      error: console.log,
    });
  }

  render() {
    const { headline } = this.state;
    return (
      <div>{headline}</div>
      <Carousel listings={this.state.listings}/>
    );
  }
}

export default App;
