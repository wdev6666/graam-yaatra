const User = require('../models').User;
//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {
  register(req, res, next) {
    /*const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      is_active: req.body.is_active
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
      });
    });*/
    return User.create({
      email: req.body.email,
      name: req.body.name,
      is_active: req.body.is_active,
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
        if (user) {
          const payload = {
            user_id: user.user_id,
            name: user.name,
            email: user.email
          };
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556000
            },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else
          next({ statusCode: 404, message: 'Email id or password incorrect!' });
      })
      .catch(error => next({ statusCode: 404, message: error.message }));
  }
};
