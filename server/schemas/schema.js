const Joi = require("joi");

const countrySchema = Joi.object().keys({
  country: Joi.string().required(),
  isd_code: Joi.number().required(),
  flag_icon: Joi.string().required()
});

const stateSchema = Joi.object().keys({
  state: Joi.string().required(),
  country_id: Joi.number().required()
});

const citySchema = Joi.object().keys({
  city: Joi.string().required(),
  state_id: Joi.number().required()
});

const vendorSchema = Joi.object().keys({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
  password: Joi.string().required(),
  city_id: Joi.number().required()
});

const userSchema = Joi.object().keys({
  email: Joi.string().required(),
  name: Joi.string().required(),
  password: Joi.string().required()
});

const loginSchema = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required()
});

module.exports = {
  "/api/countries/": countrySchema,
  "/api/countries/:country_id": countrySchema,
  "/api/states/": stateSchema,
  "/api/states/:state_id": stateSchema,
  "/api/cities/": citySchema,
  "/api/cities/:city_id": citySchema,
  "/api/vendors/": vendorSchema,
  "/api/vendors/:vendor_id": vendorSchema,
  "/api/users/reqister": userSchema,
  "/api/users/login": loginSchema
};
