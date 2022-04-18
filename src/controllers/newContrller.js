const { default: mongoose } = require('mongoose')
const developer=require('../models/dev')
const batch=require('../models/batch')

const createBatch=async (req,res)=>
{
    let newbatch=await batch.create(req.body)
    res.send({batch:newbatch})
}
const getBatch=async (req,res)=>
{
    let batchs=await batch.find()
    res.send({Batch:batchs})
}
const createDev=async (req,res)=>
{
    let dev=await developer.create(req.body)
    res.send({BatchMembers:dev})
}
const getDev=async (req,res)=>{
    let getdev=await developer.find().populate('batch')
    res.send({BatchMembers:getdev})
}
const scholar=async (req,res)=>{
    let scholarship=await developer.find({$gte:70,gender:"female"},{_id:0,nameOfDev:1})
    res.send({scholarship})
}   
const filteringByPercentageRage=async (req,res)=>
{
  let a=req.query.percentage
  console.log(typeof(a))
   let b=req.query.program
   console.log(b)
    let prom=await batch.find({name:b},{_id:1})
    let ids=[]
    for(let i=0;i<prom.length;i++)
    ids.push(prom[i]._id)

     let percent=await developer.find({percentage:{$gte:parseInt(a)},batch:prom})
    res.send({percent})   
}

module.exports.batch=createBatch
module.exports.getBatch=getBatch
module.exports.dev=createDev
module.exports.getdev=getDev
module.exports.getScholar=scholar
module.exports.last=filteringByPercentageRage