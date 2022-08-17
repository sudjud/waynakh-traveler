const { Router } = require("express");
const router = Router();

router.use(require("./users.route"));
router.use(require('./places.route'))
router.use(require('./comments.route'))
router.use(require('./image.route'))

module.exports = router;
