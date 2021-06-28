const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const userSchema = new Schema({
  song_id: {
    type: String,
    required: true,
    trim: true
  },
  user_id: {
    type: String,
    required: true,
    trim: true
  },
  platform: {
    type: String,
    required: true,
    trim: true
  }
}, {
    timestamps: true
  });

module.exports = userSchema;