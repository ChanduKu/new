const { default: mongoose } = require('mongoose')
const author=require('../models/newAthor')
const book=require('../models/NewBook')
const publisher=require('../models/newPublisher')

const createNewAuthro=async (req,res)=>
{
    let newAuth=await author.create(req.body)
    res.send({auth:newAuth})
}
const getNewAuth=async (req,res)=>{
    let data=await author.find({})
    res.send({data})
}
const createNewBook=async (req,res)=>
{
    let isPubliserValid=mongoose.Types.ObjectId.isValid(req.body.publisher)

    let isValid=mongoose.Types.ObjectId.isValid(req.body.author)
    if(!(isValid))
    console.log("author id is invalid")
    if(!(isPubliserValid))
    console.log("puslisher Id is invalid")
    if(req.body.author && req.body.publisher)
        
     {
    let newBook=await book.create(req.body)
    res.send({books:newBook})
 }
 else
 res.send("author name or publisher is rquired")
}
const getNewBook=async (req,res)=>
{
    let newBookData=await book.find().populate('author').populate('publisher')
    res.send({newBookData})
}
const creatNewpublisher=async (req,res)=>
{
    let newpublisher=await publisher.create(req.body)
    res.send({newpublisher})
}
const getPublisher= async (req,res)=>
{
    let newpub=await publisher.find()
    res.send({newpub})
}
const updateByPut=async (req,res)=>
{
    let id=req.params.id
    let pub=await publisher.findOne({name:id})
    let updatebook=await book.updateMany({id:pub},{$set:{isHardCover:true}})
    let authorId =await author.find({rating:{$gt:3.5}})
    let updatePrice=await book.updateMany({author:authorId},{$inc:{price:10}})
    res.send({updatebook,updatePrice})

}
module.exports.update=updateByPut
module.exports.getpublisher=getPublisher
module.exports.creatNewPublisher=creatNewpublisher
module.exports.getBooksData=getNewBook
module.exports.newAthor=createNewAuthro 
module.exports.newBook=createNewBook
module.exports.getAuth=getNewAuth
