const { verify } = require('jsonwebtoken')
const jwt =require('jsonwebtoken')
const mongoose=require('mongoose')
const authCheck=async (req,res,next)=>
{
    try{
        let id=req.params.userId
        if(mongoose.isValidObjectId(req.params.userId))
            return res.status(401).send("Invalid UserId")
        let token=req.headers['Token']||req.headers['token']
        if(!token)
            return res.status(401).send({msg:"token is not presnt"})
        let validity=jwt.verify(token,"chandu")
        if(!validity)
            return res.status(401).send({msg:"this user hasn't verified"})
        next()
    }
    catch(err){
        console.log(err.message)
        res.status(401).send({status:false,msg:'invalid token '})

    }
}
module.exports.authCheck=authCheck