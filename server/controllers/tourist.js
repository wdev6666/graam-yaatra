const Tourist = require('../models').Tourist;

module.exports = {
  create(req, res, next) {
    return Tourist.create({
      name: req.body.name,
      city: req.body.city
    })
      .then(tourist => res.status(200).send(tourist))
      .catch(error => next({ statusCode: 400, message: error.message }));
  },

  list(req, res, next) {
    return Tourist.findAll({})
      .then(tourists => res.status(200).send(tourists))
      .catch(error => next({ statusCode: 404, message: error.message }));
  },

  retrieve(req, res, next) {
    return Tourist.findOne({
      where: { tourist_id: req.params.tourist_id }
    })
      .then(tourist => {
        if (!tourist) next({ statusCode: 404, message: 'No Tourist found!' });
        return res.status(200).send(tourist);
      })
      .catch(error => next({ statusCode: 404, message: error.message }));
  },

  update(req, res, next) {
    return Tourist.findOne({
      where: {
        tourist_id: req.params.tourist_id
      }
    })
      .then(tourist => {
        if (!tourist) next({ statusCode: 400, message: 'Tourist not found!' });
        return Tourist.update(
          {
            name: req.body.name,
            city: req.body.city
          },
          {
            where: {
              tourist_id: req.params.tourist_id
            }
          }
        )
          .then(() => {
            res.send(tourist);
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
    return Tourist.findOne({
      where: { tourist_id: req.params.tourist_id }
    })
      .then(tourist => {
        if (!tourist) next({ statusCode: 400, message: 'Tourist not found!' });
        return Tourist.destroy({ where: { tourist_id: req.params.tourist_id } })
          .then(() =>
            res.status(200).send({ message: 'Tourist deleted successfully.' })
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
