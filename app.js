const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { ErrorHandler, handleError } = require('./server/middlewares/error');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/error', (req, res) => {
  throw new ErrorHandler(500, 'Internal Error!');
});

require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
  })
);

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
