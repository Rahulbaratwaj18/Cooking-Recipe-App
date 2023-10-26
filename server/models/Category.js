const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
 name:{
    type:String,
    require:"This field is required"
 },
 img:{
    type:String,
    require:"This field is required"
 }
})

module.exports= new mongoose.model("Category",categorySchema);