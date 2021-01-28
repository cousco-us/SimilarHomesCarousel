import styled from 'styled-components';

const CarouselStyleWrapper = styled.div`
    height: 325px;
    display: block;
    max-width: 960px;
    margin: 30px auto;
    padding: 16px;
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    color: rgb(59, 65, 68);
    background-color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.1px;
    cursor: pointer;

  button {
    appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-image: initial;
  }

  div {
    display: block;
  }

  li {
    list-style-type: none;
  }

  img {
    width: 224px;
    height: 160px;
  }

  /* Header */

  .headline {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    outline: none;
    box-sizing: border-box;
    display: block;
    padding-bottom: 16px;
    cursor: text;
  }

  /* Carousel */

  .carouselContainer {
    position: relative;
    outline: none;
    box-sizing: border-box;
    display: block;
    width: 960px;
  }

  .carouselWindow {
    height: 311px;
    width: 960px;
    overflow: auto;
    overflow: hidden;
    outline: none;
    box-sizing: border-box;
    position: absolute;
    -webkit-overflow-scrolling: touch;
    -webkit-scrollbar {
      display: none;
    };
  }

  .carouselList {
    margin-top: 0px;
    padding-bottom: 18px;
    padding-left: 0px;
    outline: none;
    display: flex;
    transition: transform .5s ease;
  }

  .previousButtonContainer {
    left: 0px;
    position: absolute;
    top: calc(50% - 24px);
    outline: none;
    box-sizing: border-box;
    display: block;
  }

  .nextButtonContainer {
    right: 0px;
    position: absolute;
    top: calc(50% - 24px);
    outline: none;
    box-sizing: border-box;
    display: block;
  }

  .carouselButtons {
    transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;
    border-radius: 24px;
    padding: 1px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid rgb(232, 233, 234);
    outline: none;
    box-sizing: border-box;
  }

  .carouselButtons:active {
    transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;
    border: 1px solid rgb(134, 144, 153);
    background-color: rgb(134, 144, 153);
    color: rgb(255, 255, 255);
  }

  .buttonIcon {
    display: inline-block;
    font-size: 15px;
    box-sizing: border-box;
  }

  /* Listing Cards */

  .listingCard {
    border-top: 0px;
    border-right: 16px;
    border-left: 0px;
    border-style: solid;
    border-color: transparent;
    flex-shrink: 0;
    flex-basis: auto;
    outline: none;
    box-sizing: border-box;
  }

  /* Listings End */

  .listingsEndContainers {
    border: 1px solid rgb(232, 233, 234);
    border-radius: 8px;
    padding: 8px;
    height: 100%;
    background-color: rgb(232, 233, 234);
    overflow: hidden;
    display: block;
    flex-direction: column;
    outline: none;
    box-sizing: border-box;
  }

  .iconContainer {
    width: 30px;
    height: 30px;
    display: inline-block;
    line-height: 0;
    outline: none;
    box-sizing: border-box;
    color:rgb(134, 144, 153);
    font-size: 22px;
  }

  .textContainer {
    padding: 8px 0px 0px;
    outline: none;
    box-sizing: border-box;
    display: block;
  }

  .seeMoreText {
    outline: none;
    box-sizing: border-box;
    display: block;
  }

  .cityName {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
    box-sizing: border-box;
    display: block;
  }

  .buttonContainer {
    padding: 8px 0px 0px;
    outline: none;
    box-sizing: border-box;
    display: block;
  }

  .takeALookButton {
    font-size: 16px;
    margin: 0px 0px 4px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
    white-space: nowrap;
    padding: 8px 16px;
    color: rgb(0, 120, 130);
    border-color: transparent;
    outline: none;
    box-sizing: border-box;
  }

  .takeALookButton:hover {
    background-color: rgb(0, 120, 130);
    color: rgb(255, 255, 255);
  }

  /* Image Panel */

  .imagePanelBox {
    position: relative;
    z-index: 0;
    height: 160px;
    width: 224px;
    display: block;
    outline: none;
    box-sizing: border-box;
  }

  .imagePanelContainer {
    background-color: rgb(232, 233, 234);
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 160px;
    outline: none;
    box-sizing: border-box;
    display: block;
  }

  .zoomedImage {
    transition: transform .5s ease;
    transform: scale(1.1);
  }

  .likeHomeContainer {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    outline: none;
    box-sizing: border-box;
    justify-content: center;
    height: 44px;
    width: 44px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
  }

  .likedHomeButton {
    min-width: 44px;
    min-height: 44px;
    width: 44px;
    height: 44px;
    overflow: visible;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    outline: none;
    box-sizing: border-box;
  }

  .shadedHeart {
    width: 30;
    height: 30;
    font-size: 23px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.233);
    stroke-width: 55px;
    stroke: rgb(232, 233, 234);
    text-align: center;
  }

  .filledHeart {
    width: 30;
    height: 30;
    font-size: 23px;
    overflow: hidden;
    color: rgb(255, 94, 63) !important;
    stroke-width: 55px;
    stroke: rgb(255, 94, 63);
    text-align: center;
  }

  .propertyTagsContainer {
    display: flex;
    width: 80%;
    height: 19px;
    overflow: hidden;
    flex-wrap: wrap;
    position: absolute;
    top: 8px;
    left: 8px;
  }

  .outerPropertyTagSpan {
    margin-right: 4px;
    background-color: rgb(255, 255, 255);
    padding: 2px 4px;
    border-radius: 4px;
    display: inline-flex;
    outline: none;
    box-sizing: border-box;
    cursor: default;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 1.33;
    font-weight: bold;
  }

  .newSpan {
    color: rgb(5, 34, 134);
  }

  /* Info Panel */

  .infoPanelOuterBox {
    width: 224px;
    height: 104px;
  }

  .infoPanelInnerBox {
    height: 96px;
    padding-top: 8px;
  }

  .priceContainer {
    height: 24px;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
  }

  .priceContent {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .houseSpecsContainer {
    height: 24px;
    box-sizing: border-box;
    outline: none;
    display: flex;
    flex-direction: row;
  }

  .houseSpec {
    padding: 0px 4px 0px 0px;
  }

  .streetAddressContainer {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
    box-sizing: border-box;
    display: block;
    color: inherit
  }

  .cityAddressContainer {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
    box-sizing: border-box;
    display: block;
  }

  .agencyContainer {
  margin: 4px, 0px, 4px, 0px;
  border-top: 1px solid rgb(205, 209, 212);
  padding-top: 8px;
  height: 17px;
  }

  .agencyContent {
    color: rgb(134, 144, 153);
    font-size: 10px;
    text-transform: uppercase;
    line-height: 13px;
    padding-bottom: 4px;
    outline: none;
    box-sizing: border-box;
    display: block;
  }


  .infoPanelIcon {
    /* color: rgb(134, 144, 153); */
    font-size: 85%;
  }

  .priceIconContainer {
    display: inline-block;
    width: 20px !important;
    height: 20px !important;
    box-sizing: border-box;
    padding-left: 7px;
  }

  .priceIcon {
    height: 20px;
    width: 20px;
    overflow: hidden;
    box-sizing: border-box;
    outline: none;

  }

  .raisedPath {
    transform-origin: 0px 0px;
    fill: rgb(255, 94, 63);
  }

  .loweredPath {
    transform-origin: 0px 0px;
    fill: rgb(0, 178, 91);
  }

`;

export default CarouselStyleWrapper;
