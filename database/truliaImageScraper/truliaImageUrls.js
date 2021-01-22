const truliaElements = require('./truliaElements');

const getTruliaImages = (element) => {
  const firstSplit = `${element}`.split('srcset="');
  const secondSlice = [];
  const imageUrls = [];

  for (let i = 1; i < firstSplit.length - 1; i += 1) {
    const currentString = firstSplit[i];
    secondSlice.push(currentString.slice(0, (currentString.indexOf('.jpg') + 4)));
  }
  for (let i = 0; i < secondSlice.length; i += 1) {
    const currentString = secondSlice[i];
    if (currentString.length > 8) {
      imageUrls.push(currentString);
    }
  }
  return imageUrls;
};

const truliaImageUrls = getTruliaImages(truliaElements);

module.exports = truliaImageUrls;
