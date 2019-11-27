const Tour = require('../models').Tour;
const Tourist = require('../models').Tourist;
const TourOrder = require('../models').TourOrder;

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
  }
};
