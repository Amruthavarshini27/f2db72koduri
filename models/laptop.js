const mongoose = require("mongoose")
const laptopSchema = mongoose.Schema({
laptop_name: String,
laptop_color:String ,
laptop_price: Number
})
module.exports = mongoose.model("Laptop",laptopSchema)
