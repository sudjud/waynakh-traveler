const { Router } = require("express");
const { tripController } = require('../controllers/trips.controllers');
const router = Router();


router.get("/trip", tripController.getTrips);
router.get("/trip/:id", tripController.getTrip);
router.post("/trip", tripController.postTrip);
router.delete("/trip/:id", tripController.deleteTrip);
router.patch("/trip/:id", tripController.updatePlace);

module.exports = router;
