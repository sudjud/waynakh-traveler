const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  email: { type: String, required: true },
  trips: [
    {
      place: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Place",
      },
      completed: {
        type: Boolean,
        default: false,
      },
      default: null,
      time: {
        type: mongoose.SchemaTypes.Date,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
