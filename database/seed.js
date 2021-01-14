const db  = require('./index.js');
const Listing = require('./Listing.js');
const faker = require('faker');

const sampleListings = [];

const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const generatePriceChange = () => {
  let options = ['noChanges', 'raised', 'lowered'];
  return options[generateRandomNumber(3)];
}

for (let i = 0; i < 10; i ++) {
  sampleListings.push({
    images: ['https://image.shutterstock.com/image-photo/old-dilapidated-shack-600w-1061005514.jpg', 'https://image.shutterstock.com/image-photo/one-room-shack-interior-pioneer-260nw-399081187.jpg', 'https://image.shutterstock.com/image-photo/isolates-toilet-roofs-concrete-timber-600w-233727097.jpg'],
    price: faker.commerce.price(),
    size: (generateRandomNumber(2300) + 700),
    bedrooms: (generateRandomNumber(6) + 1),
    bathrooms: (generateRandomNumber(6) + 1),
    addressLineOne: faker.address.streetAddress(),
    addressLineTwo: faker.address.city() + ',' + faker.address.stateAbbr(),
    agency: faker.company.companyName(),
    recentPriceChange: generatePriceChange(),
    new: faker.random.boolean(),
    forSaleByOwner: faker.random.boolean()
  })
}

const insertSampleListings = function() {
  Listing.create(sampleListings)
    .then(() => db.disconnect());
};

insertSampleListings();