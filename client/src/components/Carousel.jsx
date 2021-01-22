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
      view: 0,
    };
    this.nextButtonClick = this.nextButtonClick.bind(this);
    this.previousButtonClick = this.previousButtonClick.bind(this);
    this.stopCarouselFromGoingOver = this.stopCarouselFromGoingOver.bind(this);
  }

  nextButtonClick() {
    const { view } = this.state;
    this.setState({ view: (view + 1) });
  }

  previousButtonClick() {
    const { view } = this.state;
    this.setState({ view: (view - 1) });
  }

  previousButtonOrNot() {
    const { view } = this.state;
    if (view > 0) {
      return (
        <div className="previousButtonContainer">
          <button onClick={() => this.previousButtonClick()} className="carouselButtons">
            <div className="buttonIcon">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </button>
        </div>
      );
    }
  }

  nextButtonOrNot() {
    const { view } = this.state;
    if (view < 4) {
      return (
        <div className="nextButtonContainer">
          <button onClick={() => this.nextButtonClick()} className="carouselButtons">
            <div className="buttonIcon">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </button>
        </div>
      );
    }
  }

  stopCarouselFromGoingOver() {
    const { view } = this.state;
    const numberOfListings = 15;
    if (view > (Math.floor((numberOfListings + 1) / 4.2))) {
      console.log("hereOver", (((numberOfListings + 1) - 4) * 240) / 912);
      return (((numberOfListings + 1) - 4) * 240) / 912;
    } else if (view < 0) {
      console.log("hereunder0", 0);
      return 0;
    } else if (view < Math.floor((numberOfListings + 1) / 4)) {
      console.log("hereMiddle", view, "lastview", ((((numberOfListings + 1) - 4) * 240) / 912), "listings.length-1", (numberOfListings + 1));
      return view;
    }
  }

  render() {
    const { listings, like, unlike, city } = this.props;
    const { view } = this.state;
    const fifteenListings = listings.slice(0, 15);
    const findView = (v) => 912 * v;
    const gridStyle = {
      transform: `translateX(-${findView(this.stopCarouselFromGoingOver())}px)`,
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
              {this.previousButtonOrNot()}
              {this.nextButtonOrNot()}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
