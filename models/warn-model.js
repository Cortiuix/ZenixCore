const { Schema, model } = require("mongoose")

const warndb = new Schema({
  user: String,
  guild: String,
  content: Array
});

module.exports = model('warndb', warndb)