const { Router } = require("express");
const { commentController } = require("../controllers/comments.controller");
const router = Router();

router.get("/comment", commentController.getComment);
router.post("/comment", commentController.postComment);
router.delete("/delete/comment/:commentId", commentController.deleteComment);
router.patch("/patch/comment/:commentId", commentController.patchComment);

module.exports = router;
