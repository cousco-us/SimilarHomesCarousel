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

  // handleMouseHover() {
  //   const { hovered } = this.state;
  //   this.setState({
  //     hovered: !hovered,
  //   });
  // }

  // zoomOnHover(isHovered) {
  //   if (isHovered) {
  //     return <img className="zoomedImage" src={currentImage}></img>
  //   } else {
  //     return <img src={currentImage}></img>
  //   }
  // }

  render() {
    const { listing } = this.props;
    const { liked } = listing;
    const { hovered, images, currentImageIndex } = this.state;
    const currentImage = images[currentImageIndex];
    console.log(currentImageIndex);
    return (
      <div className="imagePanel">
        <div className="imagePanelBox">
          <div className="imagePanelContainer" onClick={() => this.handleImageClick()}>
            <div>
              <picture>
                <img src={currentImage}></img>
                {/* {this.zoomOnHover(hovered)} */}
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
