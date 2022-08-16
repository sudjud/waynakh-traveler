const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  text: String,
  photo: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  place: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Place",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
