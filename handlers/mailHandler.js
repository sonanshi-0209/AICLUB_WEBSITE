const { response } = require("express")
const nodemailer=require("nodemailer")

const mailGun=require("nodemailer-mailgun-transport")


const auth={
    auth:{
        api_key:'ab608ae785089e8d9fca036195e15b5a-cb3791c4-74b7fa2e',
        domain:'sandboxe13150af4f384c918b940ff5c9882139.mailgun.org'
    }
}

async function sendMyMail(sender,subject,body){
    try{
        console.log("inside send mail")
        const transporter=await nodemailer.createTransport(mailGun(auth))


        const mailOptions={
            from:sender,
            to:"suhanichawla2000@gmail.com",
            subject:subject,
            text:body
        }

        var res=await transporter.sendMail(mailOptions)
        if(res!=null && res.id!=null){
            //console.log("returnin success")
            return "success"
        }else{
            return "fail"
        }

    }catch(err){
        return err;
    }
    
}

module.exports={
    sendMail:sendMyMail
}
