const mongoose=require("mongoose")
const Obj=mongoose.Schema.Types.ObjectId
const devloper=new mongoose.Schema({
    nameOfDev:String,
    gender:String,
    percentage:Number,
    batch:{
        type:Obj,
        ref:"batch"
    }

})
module.exports=mongoose.model("developer",devloper)