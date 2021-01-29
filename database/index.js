const mongoose = require('mongoose');

const mongoUri = 'mongodb://database/carousel';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
