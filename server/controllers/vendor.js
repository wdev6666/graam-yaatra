const Vendor = require("../models").Vendor;

module.exports = {
  create(req, res, next) {
    return Vendor.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      city_id: req.body.city_id
    })
      .then(vendor => res.status(200).send(vendor))
      .catch(error => next({ statusCode: 400, message: error.message }));
  },

  list(req, res, next) {
    return Vendor.findAll({})
      .then(cities => res.status(200).send(cities))
      .catch(error => next({ statusCode: 404, message: error.message }));
  },

  retrieve(req, res, next) {
    return Vendor.findOne({
      where: { vendor_id: req.params.vendor_id }
    })
      .then(vendor => {
        if (!vendor) next({ statusCode: 404, message: "No vendor found!" });
        return res.status(200).send(vendor);
      })
      .catch(error => next({ statusCode: 404, message: error.message }));
  },

  update(req, res, next) {
    return Vendor.findOne({
      where: {
        vendor_id: req.params.vendor_id
      }
    })
      .then(vendor => {
        if (!vendor) next({ statusCode: 400, message: "vendor not found!" });
        return vendor
          .update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            city_id: req.body.city_id
          })
          .then(() => {
            res.send(vendor);
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
    return Vendor.findOne({
      where: { vendor_id: req.params.vendor_id }
    })
      .then(vendor => {
        if (!vendor) next({ statusCode: 400, message: "vendor not found!" });
        return vendor
          .destroy()
          .then(() =>
            res.status(200).send({ message: "vendor deleted successfully." })
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
