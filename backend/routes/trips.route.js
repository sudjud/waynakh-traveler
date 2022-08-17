const { Router } = require("express");
const { tripController } = require("../controllers/trips.controllers");
const router = Router();

router.get("/trip", tripController.getTrip);
router.get("/trip/:id", tripController.getTrips);
router.post("/trip", tripController.postTrip);
router.delete("/trip/:id", tripController.deleteTrip);
router.patch("/trip/:id", tripController.patchTrip);

module.exports = router;
