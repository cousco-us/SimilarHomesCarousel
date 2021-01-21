import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class ImagePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleLikeClick() {
    //  handle click to liked heart

  }

  handleMouseHover() {
    const { hovered } = this.state;
    this.setState({
      hovered: !hovered,
    });
  }

  zoomOnHover(isHovered) {
    if (isHovered) {
      return <img className="zoomedImage" src={currentImage}></img>
    } else {
      return <img src={currentImage}></img>
    }
  }

  render() {
    const { listing } = this.props;
    const { liked, images } = listing;
    const currentImage = images[0];
    const { hovered } = this.state;
    return (
      <div className="imagePanel">
        <div className="imagePanelBox">
          <div className="imagePanelContainer" onMouseEnter={this.handleMouseHover()} onMouseLeave={this.handleMouseHover()}>
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