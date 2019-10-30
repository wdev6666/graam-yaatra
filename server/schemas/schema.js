const Joi = require('joi');

const userSchema = Joi.object().keys({
  title: Joi.string().required()
});

module.exports = {
  '/api/users/login': userSchema,
  '/api/users/register': userSchema,
  '/api/users/:userId': userSchema
};
