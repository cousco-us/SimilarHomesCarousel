import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class ImagePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      images: props.listing.images,
      lastIndex: (props.listing.images.length - 1),
      currentImageIndex: 0,
      liked: props.listing.liked,
      listingId: props.listing._id,
      isNewListing: props.listing.isNewListing,
      forSaleByOwner: props.listing.forSaleByOwner,
    };
    this.handleImageClick = this.handleImageClick.bind(this);
    this.likeOrUnlike = this.likeOrUnlike.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.newOrNot = this.newOrNot.bind(this);
    // this.forSaleByOwnerOrNot = this.forSaleByOwnerOrNot.bind(this);
  }

  handleImageClick() {
    const { currentImageIndex, lastIndex } = this.state;
    if (currentImageIndex === lastIndex) {
      this.setState({ currentImageIndex: 0 });
    } else {
      const nextIndex = currentImageIndex + 1;
      this.setState({ currentImageIndex: nextIndex });
    }
    console.log('image index:', currentImageIndex);
    this.render();
  }

  handleMouseHover() {
    const { hovered } = this.state;
    this.setState({
      hovered: !hovered,
    });
  }

  zoomOnHover(isHovered) {
    const { images, currentImageIndex } = this.state;
    if (isHovered) {
      return <img className="zoomedImage" src={images[currentImageIndex]}></img>
    } else {
      return <img src={images[currentImageIndex]}></img>
    }
  }

  likeOrUnlike() {
    const { liked, listingId } = this.state;
    const { like, unlike } = this.props;
    if (liked) {
      this.setState({ liked: !liked });
      this.render();
      return unlike(listingId);
    }
    this.setState({ liked: !liked });
    this.render();
    return like(listingId);
  }

  fillOrUnfill() {
    const { liked } = this.state;
    if (liked) {
      return 'filledHeart';
    }
    return 'shadedHeart';
  }

  newOrNot() {
    const { isNewListing } = this.state;
    if (isNewListing) {
      return (
        <span className="outerNewSpan">
          <span className="newSpan">NEW</span>
        </span>
      );
    }
  }

  // forSaleByOwnerOrNot() {
  //   const { forSaleByOwner } = this.state;
  //   if (forSaleByOwner) {
  //     return (
  //       <span className="outerForSaleByOwnerSpan">
  //         <span className="forSaleByOwnerSpan">NEW</span>
  //       </span>
  //     );
  //   }
  // }

  render() {

    const { hovered } = this.state;
    return (
      <div className="imagePanel">
        <div className="imagePanelBox">
          <div className="imagePanelContainer" onClick={() => this.handleImageClick()} onMouseEnter={() => this.handleMouseHover()} onMouseLeave={() => this.handleMouseHover()}>
            <div>
              <picture>
                {this.zoomOnHover(hovered)}
              </picture>
            </div>
          </div>
          <div className="likeHomeContainer">
            {<FontAwesomeIcon onClick={() => this.likeOrUnlike()} className={this.fillOrUnfill()} icon={faHeart} />}
          </div>
          <div className="propertyTagsContainer">
            {this.newOrNot()}
          </div>
        </div>
      </div>
    );
  }
}

export default ImagePanel;
