const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")
const user = async (req, res) => {
  console.log(req.dody)
  const createUser = await userModel.create(req.body)
  res.send({ createUser })
}
const login = async (req, res) => {
  console.log(req.body.emailId)
  let userid = req.body.emailId
  let pass = req.body.password
  const getdata = await userModel.findOne({ emailId: userid, password: pass })
  console.log((getdata))
  if (!getdata)
    return res.send("user don't exist")
  ///----------genration token
  let token = jwt.sign(
    {
      userId: getdata._id.toString(),

    }, "chandu"
  )
  res.setHeader("tokens", token)
  res.send({ data: token })
}
const getUserData = async (req, res) => {
  try{
  let id = req.params.ids
  let userDatails = await userModel.findById(id)
  if (!userDatails)
    return (res.status(404).send('No such user exists'))
  res.send({ userDatails })
  }
  catch(err){
    res.status(500).send({error:err.message})
  }
}
const udate=async (req,res)=>
{
  try{
    let userDetails=await userModel.findById(req.params.id)
    if(!userDetails)
      return res.status(404).send({msg:"user don't exist in DB"})
    let updateUser=await userModel.findOneAndUpdate({_id:req.paramsm.id},req.body,{new:true})
    res.status(201).send({data:updateUser})
  }
  catch(err){
    res.status(500).send({error:err.message})
  }
}
const deleteUser=async (req,res)=>
{
  try{
    let userDatails=await userModel.findById(req.params.id)
    if(!userDatails)
      return res.status(204).send({msg:'user don\'t exists'})
    let udateUser=await userModel.findOneAndUpdate({_id:req.params.id},{isDeleted:true})
    res.status(200).send(({udateUser:true,data:udateUser}))
  }
  catch(err){
    res.status(500).send({Error:err.message})
  }
}

module.exports.createUser = user;
module.exports.getUserData = login;
module.exports.udate = udate;
module.exports.loginUser = getUserData;
module.exports.deleteUser=deleteUser
