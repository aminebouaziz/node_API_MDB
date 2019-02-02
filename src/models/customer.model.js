let mongoose = require('mongoose')


mongoose.connect("mongodb://admin:admin123@ds111192.mlab.com:11192/demapi", { useNewUrlParser: true })
.then(() => console.log("Mongo DB connected"))
.catch((err) => console.log(err))

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
      }
})
module.exports = mongoose.model('Customer',CustomerSchema)