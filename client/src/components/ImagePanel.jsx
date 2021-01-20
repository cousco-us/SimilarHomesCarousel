import React from 'react';

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
    const { listing, liked, currentImage} = this.state;
    return (
      <div>
        <img src={currentImage}></img>
      </div>
    );
  }
}

export default ImagePanel;
