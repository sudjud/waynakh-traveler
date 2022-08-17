const { Router } = require('express');
const { imageController } = require('../controllers/image.controller');

const router = Router();

router.post('/upload-image', imageController.upload)

module.exports = router;