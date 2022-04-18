const mongoose=require('mongoose')
const Objects=mongoose.Schema.Types.ObjectId
const newBook=new mongoose.Schema({
    name:String,
    author:{required:true,type:Objects,ref:'NewAuthor'},
    price:Number,
    publisher:{required:true,type:Objects,ref:"NewPublisher"},
    isHardCover:{default:false,type:Boolean}
})
module.exports=mongoose.model('NewBook',newBook)