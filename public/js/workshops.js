
var res=fetch('/api/events/workshops');
let pr= res.then((res)=>{
    if(res.status!=200){
        return;
    }
    return res.text();
})
pr.then((eventlist)=>{
    var events=JSON.parse(eventlist);
    console.log("events are",events);
    var eventsection=document.getElementById("eventSection")
    if(events.length==0){
        var div=document.createElement("div")
        var hr=document.createElement("hr")
        div.innerHTML=`<h2 class="display-4">Coming Soon</h2>`
        div.style.backgroundColor="#FFFFFF"
        eventsection.append(div);
        eventsection.append(hr)
    }
    
        for(var i=0;i<events.length;i++){
        var div=document.createElement("div")
        div.classList.add("jumbotron")
        if(i%2==0){
            div.style.backgroundColor="#FFFFFF"
        }
        div.innerHTML=`
            <div class="row">
            <div class="col-md-3 col-sm-6">
                         <div class="thumbnail">
                              <img src="${events[i].imageURL}">
                         
                         <div class="caption">
                            <h3 class="display-4">${events[i].name}</h3>
                            <h6>${events[i].description}</h6>
                            <h6>Date: ${events[i].date}</h6>
                            <h6>Time: ${events[i].time}</h6>
                            <h6>Venue: ${events[i].venue}</h6>
                        </div>
                         <p class="lead">
                        <a class="btn btn-primary btn-sm buttonstyle" href="${events[i].link}" role="button">Register</a>
                        </p>
                        </div>
                    </div>
                </div>
                `
        eventsection.append(div);
    }
    
});