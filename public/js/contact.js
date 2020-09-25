

var submit=document.getElementById("cf-submit")
submit.addEventListener("click",()=>{
    console.log("coming here");
    sendMail()

})
function sendMail(){
    console.log("coming here");
    var name=document.getElementById("cf-name").value
    var email=document.getElementById("cf-email").value
    var subject=document.getElementById("cf-subject").value
    var content=document.getElementById("cf-message").value
    var contentToBeSent=`
    ${content}
    Sent by
    ${name}
    `
    var res=fetch('/sendMail',{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({
            content:contentToBeSent,
            sender:email,
            subject:subject,
        })
    });
    let pr= res.then((res)=>{
        if(res.status!=200){
            return;
        }
        return res.text();
    })
    pr.then((res)=>{
        console.log(res)
    });
}


