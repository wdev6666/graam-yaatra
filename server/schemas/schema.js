const Joi = require('joi');

const userSchema = Joi.object().keys({
  title: Joi.string().required()
});

const countrySchema = Joi.object().keys({
  country: Joi.string().required(),
  isd_code: Joi.number().required(),
  flag_icon: Joi.string().required()
});

module.exports = {
  '/api/countries/': countrySchema,
  '/api/countries/:country_id': countrySchema,
  '/api/users/:userId': userSchema
};
