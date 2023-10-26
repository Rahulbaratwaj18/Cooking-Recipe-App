const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
 name:{
    type:String,
    require:"This field is required"
 },
 description:{
    type:String,
    require:"This field is required"
 },
 email:{
    type:String,
    require:"This field is required"
 },
 ingredients:{
    type:Array,
    require:"This field is required"
 },
 category:{
    type:String,
    enum:["Thai","American","Indian","Chinese","Mexican","Spanish"],
    require:"This field is required"
 },

 image:{
    type:String,
    require:"This field is required"
 }
});

recipeSchema.index({"$**":"text"});

module.exports= new mongoose.model("Recipe",recipeSchema);