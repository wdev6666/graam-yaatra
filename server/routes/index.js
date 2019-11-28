const countryController = require('../controllers').country;
const stateController = require('../controllers').state;
const cityController = require('../controllers').city;
const vendorController = require('../controllers').vendor;
const userController = require('../controllers').user;
const tourController = require('../controllers').tour;
const touristController = require('../controllers').tourist;
const couponController = require('../controllers').coupon;

const SchemaValidator = require('../middlewares/SchemaValidation');
const validateRequest = SchemaValidator(true);

const passport = require('passport');

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Graam Yatra API'
    })
  );

  app.post('/api/countries/', validateRequest, countryController.create);
  app.get('/api/countries/:country_id', countryController.retrieve);
  app.get('/api/countries/', countryController.list);
  app.put(
    '/api/countries/:country_id',
    validateRequest,
    countryController.update
  );
  app.delete('/api/countries/:country_id', countryController.delete);

  app.post('/api/states/', validateRequest, stateController.create);
  app.get('/api/states/:state_id', stateController.retrieve);
  app.get('/api/states/', stateController.list);
  app.put('/api/states/:state_id', validateRequest, stateController.update);
  app.delete('/api/states/:state_id', stateController.delete);

  app.post('/api/cities/', validateRequest, cityController.create);
  app.get('/api/cities/:city_id', cityController.retrieve);
  app.get('/api/cities/', cityController.list);
  app.put('/api/cities/:city_id', validateRequest, cityController.update);
  app.delete('/api/cities/:city_id', cityController.delete);

  app.post('/api/vendors/', validateRequest, vendorController.create);
  app.get('/api/vendors/:vendor_id', vendorController.retrieve);
  app.get('/api/vendors/', vendorController.list);
  app.put('/api/vendors/:vendor_id', validateRequest, vendorController.update);
  app.delete('/api/vendors/:vendor_id', vendorController.delete);

  app.post('/api/users/register', validateRequest, userController.register);
  app.post('/api/users/login', validateRequest, userController.login);
  app.get(
    '/api/users/profile',
    passport.authenticate(['jwt'], { session: false }),
    userController.profile
  );

  app.post(
    '/api/tours',
    //passport.authenticate(["jwt"], { session: false }),
    tourController.create
  );
  app.get(
    '/api/tours',
    //passport.authenticate(["jwt"], { session: false }),
    tourController.list
  );
  app.get(
    '/api/tours/:date',
    //    //passport.authenticate(["jwt"], { session: false }),
    tourController.listbydate
  );

  app.post(
    '/api/tourists/',
    //passport.authenticate(["jwt"], { session: false }),
    touristController.create
  );
  app.get(
    '/api/tourists/:tourist_id',
    //passport.authenticate(["jwt"], { session: false }),
    touristController.retrieve
  );
  app.get(
    '/api/tourists/',
    //passport.authenticate(["jwt"], { session: false }),
    touristController.list
  );
  app.put(
    '/api/tourists/:tourist_id',
    //passport.authenticate(["jwt"], { session: false }),
    touristController.update
  );
  app.delete(
    '/api/tourists/:tourist_id',
    //passport.authenticate(["jwt"], { session: false }),
    touristController.delete
  );

  app.get(
    '/api/coupons/',
    //passport.authenticate(["jwt"], { session: false }),
    couponController.list
  );
  app.get(
    '/api/coupons/:date',
    //passport.authenticate(["jwt"], { session: false }),
    couponController.listbydate
  );
  app.get(
    '/api/coupons/tours/:tours',
    //passport.authenticate(["jwt"], { session: false }),
    couponController.listbytour
  );
  app.delete(
    '/api/coupons/:id',
    //passport.authenticate(["jwt"], { session: false }),
    couponController.delete
  );
};
