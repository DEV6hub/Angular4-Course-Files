const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const peopleRoutes = require('./routes/people');

const app = express();

// Support JSON Encoded bodies
app.use(bodyParser.json());

// Add request/response logging
app.use(morgan('dev'));

// Configure headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('X-powered-by', 'DEV6');
  next();
});

// Register Routes
app.use('/people', peopleRoutes);


// Start static
const server = app.listen(9000, () => {
  console.log(`Server started at http://${server.address().address}:${server.address().port}`);
});
