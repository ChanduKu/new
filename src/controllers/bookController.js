const BookModel= require("../models/bookModel")
const authorModel=require("../models/Author")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const update=async (req,res)=>{
    const bookDetails=await BookModel.find({name:"Two states"})
    const id=bookDetails[0].author_id
    const books=await authorModel.find({author_id:id}).select({author_name:1,_id:0})
   
    const bkname=bookDetails[0].name
    const updateprice=await BookModel.findOneAndUpdate({name:bkname},{prices:100},{new:true}).select({prices:1,_id:0})
    
    res.send({msg:books,updateprice})
}

module.exports.createBook= createBook
module.exports.udpdate=update
