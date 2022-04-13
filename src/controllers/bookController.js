const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
   
   let allBooks= await BookModel.find({},{authorName:1,bookName:1,_id:0})

   //let name=allBooks.map(i=>i.authorName)
    res.send({msg:allBooks})
}
const getBooksInYears=async function(req,res){
    let years=await BookModel.find({Year:2020})
    res.send({msg:years})
}
const india=async function(req,res){
    let price=await BookModel.find({"prices.indianPrice":"100"},{"prices.indianPrice":"200"})
    res.send({msg:price})
}
const randombook=async (req,res)=>{
    let ran=await BookModel.find({stockAvailable:true,toatlPages:{$gte:500}})
    res.send({msg:ran})
}
const randInput=async (req,res)=>{
    let datas=req.body
    console.log(datas)
    let prop=await BookModel.find({datas})
    res.send({msg:prop})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.yearsData=getBooksInYears
module.exports.ind=india
module.exports.rando=randombook
module.exports.dates=randInput