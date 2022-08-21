const mongoose = require("mongoose")
const mdb = require("./config.json")

mongoose.connect(mdb.mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) 
.then(db => console.log("Pansin was successfully connected to mongodb"))
.catch(err => console.log(err))