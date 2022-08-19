const Comment = require("../models/Comment.model");
const Place = require("../models/Place.model");

module.exports.commentController = {
  postComment: async (req, res) => {
    try {
      const comment = await Comment.create ({
        text:req.body.text,
        user:req.user._id
      })
      await Place.findByIdAndUpdate(
        req.body.placeId,
        {
          $push:{
            comment: comment._id
          }
        }
      )
      res.json('added commentary')
    } catch (error) {
      res.json(error.toString());
    }
  },
  patchComment: async (req, res) => {
    try {
      const { text, photo } = req.body;
      const { user, place } = req.params;
      const comment = await Comment.findByIdAndUpdate(req.params.commentId, {
        text,
        photo,
        user,
        place,
      });
      res.json(comment);
    } catch (error) {
      res.json(error.toString());
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndRemove(req.params.commentId);
      res.json("Комментарий удален!");
    } catch (error) {
      res.json(error.toString());
    }
  },
  getComment: async (req, res) => {
    try {
      const comments = await Comment.find()
        .populate("user", "-__v")
        .populate("place");
      res.json(comments);
    } catch (error) {
      res.json(error.toString());
    }
  },
};
