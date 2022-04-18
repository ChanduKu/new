const mongoose=require("mongoose")
const batch= new mongoose.Schema({
   name:String,
   size:Number,
   program:{type:String,
  enum:["BackEnd","FrontEnd"]}

})
module.exports=mongoose.model('batch',batch)