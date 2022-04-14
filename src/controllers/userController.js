const Author = require("../models/Author")
const UserModel= require("../models/Author")
const bookModel = require("../models/bookModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}
const findBOok=async (req,res)=>{
    let data=req.body

    
}

const id=async (req,res)=>{
    let fileted=await UserModel.find(req.body,{author_id:1,_id:0})
    res.send(fileted)
}
const authorName=async (req,res)=>{
    const bookdsid=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
const Id=bookdsid.map(i=>i.author_id)
let va=[]

    console.log(Id)
for(let i=0;i<Id.length;i++){
    let x=id[i]
    const author=await Author.find({author_id:x}).select({author_name:1,_id:0})
    va.push(author)
}
const authorName=va.flat()
//console.log(va)
res.send({msg:va})
}
module.exports.list=id
module.exports.name=authorName

module.exports.createUser= createUser
