const faker = require('faker');
const truliaImageUrls = require('./truliaImageScraper/truliaImageUrls');
const db = require('./index.js');
const Listing = require('./Listing.js');

const sampleListings = [];

const generateRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const generatePriceChange = () => ['noChanges', 'raised', 'lowered'][generateRandomNumber(3)];

const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const chooseRandomImage = () => truliaImageUrls[generateRandomNumber(truliaImageUrls.length)];

const generateRandomLengthPhotoArray = () => {
  const photoArray = [];
  for (let i = 0; i < (generateRandomNumber(10) + 8); i += 1) {
    photoArray.push(chooseRandomImage());
  }
  return photoArray;
};

for (let i = 0; i < 100; i += 1) {
  sampleListings.push({
    images: generateRandomLengthPhotoArray(),
    price: numberWithCommas((generateRandomNumber(4000) + 800) * 1000),
    size: numberWithCommas(generateRandomNumber(2300) + 700),
    bedrooms: (generateRandomNumber(6) + 1),
    bathrooms: (generateRandomNumber(6) + 1),
    addressLineOne: faker.address.streetAddress(),
    neighborhood: faker.name.lastName(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    agency: faker.company.companyName(),
    recentPriceChange: generatePriceChange(),
    isNewListing: faker.random.boolean(),
    forSaleByOwner: faker.random.boolean(),
    liked: false,
  });
}

const insertSampleListings = () => {
  Listing.create(sampleListings)
    .then(() => db.disconnect());
};

insertSampleListings();
