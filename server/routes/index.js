const countryController = require("../controllers").country;
const stateController = require("../controllers").state;
const cityController = require("../controllers").city;
const vendorController = require("../controllers").vendor;
const userController = require("../controllers").user;

const SchemaValidator = require("../middlewares/SchemaValidation");
const validateRequest = SchemaValidator(true);

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Graam Yatra API"
    })
  );

  app.post("/api/countries/", validateRequest, countryController.create);
  app.get("/api/countries/:country_id", countryController.retrieve);
  app.get("/api/countries/", countryController.list);
  app.put(
    "/api/countries/:country_id",
    validateRequest,
    countryController.update
  );
  app.delete("/api/countries/:country_id", countryController.delete);

  app.post("/api/states/", validateRequest, stateController.create);
  app.get("/api/states/:state_id", stateController.retrieve);
  app.get("/api/states/", stateController.list);
  app.put("/api/states/:state_id", validateRequest, stateController.update);
  app.delete("/api/states/:state_id", stateController.delete);

  app.post("/api/cities/", validateRequest, cityController.create);
  app.get("/api/cities/:city_id", cityController.retrieve);
  app.get("/api/cities/", cityController.list);
  app.put("/api/cities/:city_id", validateRequest, cityController.update);
  app.delete("/api/cities/:city_id", cityController.delete);

  app.post("/api/vendors/", validateRequest, vendorController.create);
  app.get("/api/vendors/:vendor_id", vendorController.retrieve);
  app.get("/api/vendors/", vendorController.list);
  app.put("/api/vendors/:vendor_id", validateRequest, vendorController.update);
  app.delete("/api/vendors/:vendor_id", vendorController.delete);

  app.post("/api/users/register", validateRequest, userController.register);
};
