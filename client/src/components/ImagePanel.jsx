import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class ImagePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: this.props.listing,
      liked: this.props.listing.liked,
      currentImage: this.props.listing.images[0],
    };
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleLikeClick() {
    //  handle click to liked heart

  }

  handleMouseHover() {
    //  handle image cycling on hover

  }

  render() {
    const { listing } = this.props;
    const { liked, images } = listing;
    const currentImage = images[0];
    return (
      <div className="imagePanel">
        <div className="imagePanelBox">
          <div className="imagePanelContainer">
            <div>
              <picture>
                <img src={currentImage}></img>
              </picture>
            </div>
          </div>
          <div className="likeHomeContainer">
            <div className="likeHomeButton">
              {<FontAwesomeIcon onClick={this.handleLikeClick()} className="likedHeart" icon={faHeart} />}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ImagePanel;