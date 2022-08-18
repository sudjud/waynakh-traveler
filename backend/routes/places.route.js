const { Router } = require("express");
const router = Router();
const { placeController } = require('../controllers/place.controller')

router.post('/place', placeController.postPlace);
router.get('/place', placeController.getPlaces);

module.exports = router;