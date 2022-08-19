const { Schema, model } = require("mongoose")

const user = new Schema({
  userId: String,
  blacklisted: { type: Boolean, default: false }

});

module.exports = model('user', user)