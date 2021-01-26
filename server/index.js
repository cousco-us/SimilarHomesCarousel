const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const CarouselController = require('./controllers/CarouselController.js');

const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/listings', CarouselController.getListings);
app.patch('/api/listings/like/:id', CarouselController.likeListing);
app.patch('/api/listings/unlike/:id', CarouselController.unlikeListing);
app.delete('/api/listings/drop', CarouselController.dropListings);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Carousel is listening on port:', port);
});
