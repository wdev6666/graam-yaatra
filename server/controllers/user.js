const User = require("../models").User;
const bcrypt = require("bcryptjs");

module.exports = {
  register(req, res, next) {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      is_active: true,
      password: req.body.password
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
      });
    });
    return User.create(newUser)
      .then(user => res.status(200).send(user))
      .catch(error => next({ statusCode: 400, message: error.message }));
  }
};
