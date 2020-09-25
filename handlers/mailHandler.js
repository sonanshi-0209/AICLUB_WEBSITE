const nodemailer=require("nodemailer")

const mailGun=require("nodemailer-mailgun-transport")


const auth={
    auth:{
        api_key:'ab608ae785089e8d9fca036195e15b5a-cb3791c4-74b7fa2e',
        domain:'sandboxe13150af4f384c918b940ff5c9882139.mailgun.org'
    }
}

const transporter=nodemailer.createTransport(mailGun(auth))


const mailOptions={
    from:"suhanichawla200@gmail.com",
    to:"suhanichawla2000@gmail.com",
    subject:"testing",
    text:"I would like to get in touch with you"
}

transporter.sendMail(mailOptions,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})