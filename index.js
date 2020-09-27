var express=require("express")
var app=express()
var bodyParser=require("body-parser")
var eventRoutes=require("./routes/events")
var errorHandler=require("./handlers/error")
var db=require("./models")
var path = require('path');
const port=process.env.PORT || 8080;
const nodemailer = require('nodemailer');
var mailer=require("./handlers/mailHandler")
var homepath=path.join(__dirname, '')
require('dotenv').config();

app.use('/',express.static('public'))
app.set('view engine', 'html');
app.use(bodyParser.json())

app.get('/about',(req,res)=>{
    res.redirect('/aboutus.html')
})

app.get('/team',(req,res)=>{
    console.log("coming here");
    res.redirect('/team.html')
})

app.post('/sendMail',async function(req,res){
    const {sender,subject,content}=req.body
    var status=await mailer.sendMail(sender,subject,content);
    if(status=="success"){
        res.sendStatus(200)
    }else{
        res.sendStatus(404)
    }
})


app.get('/events/hackathons',(req,res)=>{
    res.render("signin.html")
})

app.get('/events/workshops',(req,res)=>{
    res.render("signin.html")
})

app.get('/events/collaborations',(req,res)=>{
    res.render("signin.html")
})

app.use("/api/events",eventRoutes)

app.use((req,res,next)=>{
    let err=new Error("NOT FOUND")
    err.status=404
    next(err)
})


app.use(errorHandler)

app.listen(port,()=>{
    console.log(`SERVER STARTED ON ${port}`)
})


