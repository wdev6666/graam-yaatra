const Country = require('../models').Country;

module.exports = {
  create(req, res, next) {
    return Country.create({
      country: req.body.country,
      isd_code: req.body.isd_code,
      flag_icon: req.body.flag_icon
    })
      .then(country => res.status(200).send(country))
      .catch(error => next({ statusCode: 400, message: error.message }));
  },

  list(req, res, next) {
    return Country.findAll({})
      .then(todos => res.status(200).send(todos))
      .catch(error => next({ statusCode: 404, message: error.message }));
  },

  retrieve(req, res, next) {
    return Country.findOne({
      where: { country_id: req.params.country_id }
    })
      .then(country => {
        if (!country) next({ statusCode: 404, message: 'No country found!' });
        return res.status(200).send(country);
      })
      .catch(error => next({ statusCode: 404, message: error.message }));
  },

  update(req, res, next) {
    return Country.findOne({
      where: {
        country_id: req.params.country_id
      }
    })
      .then(country => {
        if (!country) next({ statusCode: 400, message: 'Country not found!' });
        return country
          .update({
            country: req.body.country,
            isd_code: req.body.isd_code,
            flag_icon: req.body.flag_icon
          })
          .then(() => {
            res.send(country);
          })
          .catch(error => {
            next({ statusCode: 400, message: error.message });
          });
      })
      .catch(error => {
        next({ statusCode: 400, message: error.message });
      });
  },

  delete(req, res, next) {
    return Country.findOne({
      where: { country_id: req.params.country_id }
    })
      .then(country => {
        if (!country) next({ statusCode: 400, message: 'Country not found!' });
        return country
          .destroy()
          .then(() =>
            res.status(200).send({ message: 'Country deleted successfully.' })
          )
          .catch(error => {
            next({ statusCode: 400, message: error.message });
          });
      })
      .catch(error => {
        next({ statusCode: 400, message: error.message });
      });
  }
};
