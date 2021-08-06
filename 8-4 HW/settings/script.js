let data = localStorage
let cookie = data.getItem("LoggedOn")

// document.addEventListener("load", function(){
    if(cookie){
        console.log(cookie)
    } else {
        location.href = "http://127.0.0.1:5500/8-4%20HW/signup/index.html"
    }
// })

