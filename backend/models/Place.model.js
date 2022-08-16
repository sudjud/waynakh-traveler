const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
  name: { type: String, require: true },
  point: { type: String, require: true },
  description: String,
  likes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User'
    }
  ],
  comments: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Comment'
  }
})