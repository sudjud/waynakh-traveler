const { Router } = require("express");
const router = Router();

router.use(require("./users.route"));
router.use(require('./places.route'))
router.use(require('./comment.route'))

module.exports = router;