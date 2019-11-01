const City = require('../models').City;

module.exports = {
  create(req, res, next) {
    return City.create({
      city: req.body.city,
      state_id: req.body.state_id
    })
      .then(city => res.status(200).send(city))
      .catch(error => next({ statusCode: 400, message: error.message }));
  },

  list(req, res, next) {
    return City.findAll({})
      .then(cities => res.status(200).send(cities))
      .catch(error => next({ statusCode: 404, message: error.message }));
  },

  retrieve(req, res, next) {
    return City.findOne({
      where: { city_id: req.params.city_id }
    })
      .then(city => {
        if (!city) next({ statusCode: 404, message: 'No city found!' });
        return res.status(200).send(city);
      })
      .catch(error => next({ statusCode: 404, message: error.message }));
  },

  update(req, res, next) {
    return City.findOne({
      where: {
        city_id: req.params.city_id
      }
    })
      .then(city => {
        if (!city) next({ statusCode: 400, message: 'City not found!' });
        return city
          .update({
            city: req.body.city,
            state_id: req.body.state_id
          })
          .then(() => {
            res.send(city);
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
    return City.findOne({
      where: { city_id: req.params.city_id }
    })
      .then(city => {
        if (!city) next({ statusCode: 400, message: 'City not found!' });
        return city
          .destroy()
          .then(() =>
            res.status(200).send({ message: 'City deleted successfully.' })
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
