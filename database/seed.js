const faker = require('faker');
const db = require('./index.js');
const Listing = require('./Listing.js');

const sampleListings = [];

const generateRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const generatePriceChange = () => ['noChanges', 'raised', 'lowered'][generateRandomNumber(3)];

const generateRandomLengthPhotoArray = () => {
  const photoArray = [];
  for (let i = 0; i < (generateRandomNumber(10) + 8); i += 1) {
    photoArray.push('https://loremflickr.com/320/206/house');
  }
  return photoArray;
};

for (let i = 0; i < 100; i += 1) {
  sampleListings.push({
    images: generateRandomLengthPhotoArray(),
    price: faker.commerce.price(),
    size: (generateRandomNumber(2300) + 700),
    bedrooms: (generateRandomNumber(6) + 1),
    bathrooms: (generateRandomNumber(6) + 1),
    addressLineOne: faker.address.streetAddress(),
    addressLineTwo: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    agency: faker.company.companyName(),
    recentPriceChange: generatePriceChange(),
    new: faker.random.boolean(),
    forSaleByOwner: faker.random.boolean(),
  });
}

const insertSampleListings = () => {
  Listing.create(sampleListings)
    .then(() => db.disconnect());
};

insertSampleListings();
