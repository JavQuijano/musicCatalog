const mongoose = require('mongoose');
const authSchema = require('./favorite_model');

authSchema.statics = {
  create: function (data, cb) {
    const favorite = new this(data);
    favorite.save(cb);
  },
}

const authModel = mongoose.model('Favorites', authSchema);
module.exports = authModel;