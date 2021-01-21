import React from 'react';
import Listing from './Listing.jsx';
import ListingsEnd from './ListingsEnd.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line arrow-body-style
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 1,
    };
    this.nextButtonClick = this.nextButtonClick.bind(this);
    this.previousButtonClick = this.previousButtonClick.bind(this);
  }

  nextButtonClick() {
    const { view } = this.state;
    this.setState({ view: (view + 1) });
  }

  previousButtonClick() {
    const { view } = this.state;
    this.setState({ view: (view - 1) });
  }

  nextButtonOrNot() {
    const { view } = this.state;

  }

  previousButtonOrNot() {
    const { view } = this.state;
    if (view !== 0) {
      return (
        <div className="directionControl">
          <button onClick={() => this.previousButtonClick()} className="carouselButtons">
            <div className="buttonIcon">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </button>
        </div>
      )
    }
  }

  render() {
    const { listings, like, unlike, city } = this.props;
    const { view } = this.state;
    const fifteenListings = listings.slice(0, 15);
    const findView = (v) => 912 * v;
    const gridStyle = {
      transform: `translateX(-${findView(view)}px)`,
    };

    return (
      <div className="carousel">
        <div className="carouselContainer">
          <div className="carouselWindow">
              <ul className="carouselList" style={gridStyle}>
                {
                // eslint-disable-next-line max-len
                  fifteenListings.map((listing) => <Listing key={listing._id} like={like} unlike={unlike} listing={listing} />)
                }
                <ListingsEnd city={city} />
              </ul>
          </div>
          {this.previousButtonOrNot()}
        </div>
      </div>
    );
  }
}

export default Carousel;
