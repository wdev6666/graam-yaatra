const Tour = require("../models").Tour;
const Tourist = require("../models").Tourist;
const TourOrder = require("../models").TourOrder;
const Coupon = require("../models").Coupon;

module.exports = {
  create(req, res, next) {
    if (req.body.tourists.length <= 0) {
      next({ statusCode: 400, message: "Insert tourist data first!" });
    } else {
      var a = "";
      req.body.tourists.forEach(tourist_id => {
        return Tourist.findOne({ where: { tourist_id: tourist_id } }).then(
          tourist => {
            //console.log(flag);
            if (!tourist) {
              next({ statusCode: 404, message: "Insert tourist data!" });
            } else {
              Tour.create(req.body, { w: 1 }, { returning: true }).then(
                tour => {
                  req.body.tourists.forEach(tourist_id => {
                    TourOrder.findOrCreate({
                      where: {
                        tour_id: tour.tour_id,
                        tourist_id: tourist_id
                      },
                      defaults: {
                        tour_id: tour.tour_id,
                        tourist_id: tourist_id
                      }
                    }).then(() => {
                      Coupon.create({
                        tourist_id: tourist_id,
                        active: true,
                        date: req.body.date
                      });
                    });
                  });
                  return res.send("Tour created successfully!");
                }
              );
            }
          }
        );
      });
    }
    /*
    Tour.create(req.body, { w: 1 }, { returning: true })
      .then(function(tour) {
        req.body.tourists.forEach(item => {
          Tourist.findOne({
            where: { tourist_id: item.tourist_id }
          }).then(tourist => {
            if (!tourist) {
              return false;
              //next({ statusCode: 404, message: 'Tourist not found!' });
            }
            TourOrder.findOrCreate({
              where: { tour_id: tour.tour_id, tourist_id: tourist.tourist_id },
              defaults: {
                tour_id: tour.tour_id,
                tourist_id: tourist.tourist_id
              }
            }).then(() => {
              Coupon.create({
                tourist_id: tourist.tourist_id,
                active: true,
                date: req.body.date
              });
            });*/
    /*
            TourOrder.findOne({
              where: { tour_id: tour.tour_id, tourist_id: tourist.tourist_id }
            }).then(tourOrder => {
              console.log(tourOrder.tour_id);
              if (!tourOrder) {
                const to = {
                  tour_id: tour.tour_id,
                  tourist_id: item.tourist_id
                };
                TourOrder.create(to, { w: 1 }, { returning: true });
              } else {
                return next({
                  statusCode: 400,
                  message: 'TourOrder is already inserted!'
                });
              }
            });*/
    //  });
    //});
    //return res.status(200).json({ message: 'Tour added successful!' });
    //})
    //.catch(err => next({ statusCode: 400, message: err }));
  },

  list(req, res, next) {
    const allOrders = Tour.findAll({
      include: [
        {
          model: Tourist,
          as: "tourists",
          required: true,
          attributes: ["tourist_id", "name", "city"],
          through: {
            model: TourOrder,
            as: "tourOrder"
          }
        }
      ]
    }).catch(err => next({ statusCode: 404, message: err.message }));

    //return respondWith(res, 200, ['Returning all orders'], { allOrders });
    return res.send({ allOrders });
  },

  listbydate(req, res, next) {
    let date = req.params.date;
    if (!validateDate(date))
      return next({ statusCode: 400, message: "Invalid date format!" });
    Tour.findAll({
      attributes: ["tour_id", "members"],
      where: { date: req.params.date }
    })
      .then(tours => {
        res.send(tours);
      })
      .catch(err => next({ statusCode: 404, message: err.message }));
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
