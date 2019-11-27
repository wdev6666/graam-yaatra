const Tour = require('../models').Tour;
const Tourist = require('../models').Tourist;
const TourOrder = require('../models').TourOrder;
const Coupon = require('../models').Coupon;

module.exports = {
  create(req, res, next) {
    let error = false;
    let errorMessage = [];
    Tour.create(req.body, { w: 1 }, { returning: true })
      .then(function(tour) {
        req.body.tourists.forEach(item => {
          Tourist.findOne({
            where: { tourist_id: item.tourist_id }
          }).then(tourist => {
            if (!tourist) {
              //  return next({ statusCode: 404, message: 'Tourist not found!' });
              error = true;
              errorMessage.push('Tourist not found!');
              return true;
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
                active: true
              });
            });
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
          });
        });
        if (error) return next({ statusCode: 400, message: errorMessage[0] });
        else return res.status(200).json({ message: 'Tour added successful!' });
      })
      .catch(err => next({ statusCode: 400, message: err }));
  },

  getAll(req, res, next) {
    const allOrders = Tour.findAll({
      include: [
        {
          model: Tourist,
          as: 'tourists',
          required: true,
          // Pass in the Product attributes that you want to retrieve
          attributes: ['tourist_id', 'name', 'city'],
          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: TourOrder,
            as: 'tourOrder'
          }
        }
      ]
    }).catch(err => next({ statusCode: 404, message: err.message }));

    // If everything goes well respond with the orders
    //return respondWith(res, 200, ['Returning all orders'], { allOrders });
    return res.send({ allOrders });
  }
};
