const Coupon = require('../models').Coupon;
const TourOrder = require('../models').TourOrder;
const Tour = require('../models').Tour;

module.exports = {
  list(req, res, next) {
    Coupon.findAll()
      .then(coupons => {
        res.send(coupons);
      })
      .catch(err =>
        next({ statusCode: 404, message: 'No coupons found for the day!' })
      );
  },

  listbydate(req, res, next) {
    let date = req.params.date;

    if (!validateDate(date))
      return next({ statusCode: 400, message: 'Invalid date format!' });
    Coupon.findAll({
      attributes: ['tourist_id', 'coupon'],
      where: { date: date }
    })
      .then(coupons => {
        res.send(coupons);
      })
      .catch(err =>
        next({ statusCode: 404, message: 'No coupons found for the day!' })
      );
  },

  listbytour(req, res, next) {
    let tours = req.params.tours;

    Coupon.find({
      where: {},
      include: [Tour]
    })
      .then(coupons => {
        res.send(coupons);
      })
      .catch(err =>
        next({ statusCode: 404, message: 'No coupons found for the day!' })
      );
  },

  delete(req, res, next) {
    return Coupon.findOne({
      where: { id: req.params.id }
    })
      .then(coupon => {
        if (!coupon) next({ statusCode: 400, message: 'Coupon not found!' });
        return coupon
          .destroy()
          .then(() =>
            res.status(200).send({ message: 'Coupon deleted successfully.' })
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

function validateDate(date) {
  if (isNaN(Date.parse(date))) {
    return false;
  } else {
    if (date != new Date(date).toISOString().substr(0, 10)) {
      return false;
    }
  }
  return true;
}
