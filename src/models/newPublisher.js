const mongoose=require('mongoose')
const newPUlisher=new mongoose.Schema({
    name:String,
    headQuarter:String
})
module.exports=mongoose.model("NewPublisher",newPUlisher)