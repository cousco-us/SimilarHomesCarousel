import React from 'react';
import Listing from './Listing.jsx';
import ListingsEnd from './ListingsEnd.jsx';

// eslint-disable-next-line arrow-body-style
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0,
    };
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
            <div style={gridStyle} className="carouselGridContainer">
              <ul className="carouselList">
                {
                // eslint-disable-next-line max-len
                  fifteenListings.map((listing) => <Listing key={listing._id} like={like} unlike={unlike} listing={listing} />)
                }
                <ListingsEnd city={city} />
              </ul>
            </div>
          </div>
          {/* {conditionally render <div className="directionControl"><button className="carouselButtons"><div className="buttonIcon">fontAwesomeElement</div></button></div>} */}
        </div>
      </div>
    );
  }
}

export default Carousel;
