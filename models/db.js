const { Mongoose } = require("mongoose");

var mongoose =require('mongoose')
var SiteSchema =mongoose.Schema({
    image:String,
    name:String,
    country:String,
    continent:String,
});
var Site=mongoose.model("Site",SiteSchema);
module.exports=Site;