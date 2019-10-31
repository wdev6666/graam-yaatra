const State = require('../models').State;

module.exports = {
  create(req, res, next) {
    return State.create({
      state: req.body.state,
      country_id: req.body.country_id
    })
      .then(state => res.status(200).send(state))
      .catch(error => next({ statusCode: 400, message: error.message }));
  },

  list(req, res, next) {
    return State.findAll({})
      .then(states => res.status(200).send(states))
      .catch(error => next({ statusCode: 404, message: error.message }));
  },

  retrieve(req, res, next) {
    return State.findOne({
      where: { state_id: req.params.state_id }
    })
      .then(state => {
        if (!state) next({ statusCode: 404, message: 'No state found!' });
        return res.status(200).send(state);
      })
      .catch(error => next({ statusCode: 404, message: error.message }));
  },

  update(req, res, next) {
    return State.findOne({
      where: {
        state_id: req.params.state_id
      }
    })
      .then(state => {
        if (!state) next({ statusCode: 400, message: 'state not found!' });
        return state
          .update({
            state: req.body.state,
            country_id: req.body.country_id
          })
          .then(() => {
            res.send(state);
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
    return State.findOne({
      where: { state_id: req.params.state_id }
    })
      .then(state => {
        if (!state) next({ statusCode: 400, message: 'state not found!' });
        return state
          .destroy()
          .then(() =>
            res.status(200).send({ message: 'state deleted successfully.' })
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
