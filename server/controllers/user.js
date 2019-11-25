const User = require("../models").User;

module.exports = {
  register(req, res, next) {
    return User.create({
      name: req.body.name,
      email: req.body.email,
      is_active: true,
      password: req.body.password
    })
      .then(user => res.status(200).send(user))
      .catch(error => next({ statusCode: 400, message: error.message }));
  },

  login(req, res, next) {
    return User.findOne({
      where: { email: req.body.email, password: req.body.password }
    })
      .then(user => {
        if (!user) next({ statusCode: 404, message: 'No user found!' });
        return res.status(200).send(user);
      })
      .catch(error => next({ statusCode: 404, message: error.message }));
  }
};
