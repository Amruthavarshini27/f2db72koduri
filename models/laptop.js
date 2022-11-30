const mongoose = require("mongoose")
const laptopSchema = mongoose.Schema({
laptop_name: String,
laptop_color:String ,
laptop_price:{
    type:Number,
    min: 85000,
    max: 500000 }
})
module.exports = mongoose.model("Laptop",laptopSchema)
