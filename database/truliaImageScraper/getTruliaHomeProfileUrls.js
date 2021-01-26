const getTruliaHomeProfileUrls = (element) => {
  const firstSplit = `${element}`.split('src="');
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

module.exports = getTruliaHomeProfileUrls;
