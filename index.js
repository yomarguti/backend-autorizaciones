require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const db = require('./util/database');
//Config Database
require('./util/configRelations');
const API_PORT = 3001;
const app = express();

//Routes
const voladuraRoute = require('./routes/voladuras');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//Routes
app.use('/api', voladuraRoute);

db.sync()
  .then(() => {
    app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
  })
  .catch((e) => {
    console.log('Error ', e);
  });
