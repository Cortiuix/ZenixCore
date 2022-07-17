const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://pansinbot:h4HyOEvkzvsGIV9M@cluster0.s6bey.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) 
.then(db => console.log("Pansin was successfully connected to mongodb"))
.catch(err => console.log(err))