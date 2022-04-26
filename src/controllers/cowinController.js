let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getByDistric=async (req,res)=>
{
    try{
        let distric=req.query.districts
        let date=req.query.date
        var options={
            method:'get',
            url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${distric}&date=${date}`

        }
        let result=await axios(options)
        res.status(200).send({msg:result.data})
    }
    catch(err){
        res.sataus(500).send({msg:err.message})

    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getWeather=async (req,res)=>
{
    try{
        let city=req.query.q
        var options={
            method:'get',
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54b9ce3b22eb5fffa2907b272ff89f15`
        }
        let results=await axios(options)
        res.status(200).send({Weather:results.data})
    }
    catch(err){
        res.status(500).send({error:err.message})
    }
}
let getWeather2=async (req,res)=>
{
    try{
        const arr=['Tirupati','Delhi','London',"Moscow","Bangalore","ramagundam"]
        const resl=[]
        for(let i in arr)
        {
        var options={
            method:'get',
            url:`http://api.openweathermap.org/data/2.5/weather?q=${arr[i]}&appid=54b9ce3b22eb5fffa2907b272ff89f15`
        }
        let results=await axios(options)
     
        resl.push({city:arr[i],temp:results.data.main.temp})
       
        }
       resl.sort((a,b)=>b.temp-a.temp)
        console.log(resl)
        res.send({msg:resl})
    }
    catch(err){
        res.status(500).send({error:err.message})
    }
}
let memeCreate=async (req,res)=>
{
    try{
        let id=req.query.template_id
        let text0=req.query.text0
        let text1=req.query.text1
        let fetch={
            method:'get',
            url:`http://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=&${text1}&username=Chandukick&password=ChanduRoot`
        }
        let result=await axios(fetch)
        res.status(200).send({msg:result.data})
    }
    catch(err){
        res.sataus(500).send({msg:err.message})
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistric=getByDistric
module.exports.getWeather=getWeather
module.exports.multiCity=getWeather2
module.exports.memeCreate=memeCreate