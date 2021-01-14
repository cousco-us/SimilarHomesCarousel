const express = require('express');
const app = express();
//require controller
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

//route to controllers

app.listen(port, () => {
  console.log('Carousel is listening on port:', port);
})