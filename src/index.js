const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://chandu:root@newcluster.dek5n.mongodb.net/chandudb", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
const midll=function(req,res,next){

    let dateObj=new Date().toLocaleString()
    let ip=req.socket.remoteAddress
    let addres=req.url
    console.log(dateObj+","+ip+","+addres)
    next()
}
    app.use(midll)
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
