import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class ImagePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      images: props.listing.images,
      lastIndex: (props.listing.images.length - 1),
      currentImageIndex: 0,
      liked: props.listing.liked,
    };
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    // this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleLikeClick() {
    //  handle click to liked heart

  }

  handleImageClick() {
    const { currentImageIndex, lastIndex } = this.state;
    if (currentImageIndex === lastIndex) {
      this.setState({ currentImageIndex: 0 });
    } else {
      const nextIndex = currentImageIndex + 1;
      this.setState({ currentImageIndex: nextIndex });
    }
    this.render();
  }

  handleMouseHover() {
    const { hovered } = this.state;
    this.setState({
      hovered: !hovered,
    });
  }

  zoomOnHover(isHovered) {
    const { images, currentImageIndex} = this.state;
    if (isHovered) {
      return <img className="zoomedImage" src={images[currentImageIndex]}></img>
    } else {
      return <img src={images[currentImageIndex]}></img>
    }
  }

  render() {
    const { hovered, images, currentImageIndex, liked } = this.state;
    const currentImage = images[currentImageIndex];
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
