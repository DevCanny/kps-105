
let data = localStorage
let cookie = data.getItem("LoggedOn")

// document.addEventListener("load", function(){
    if(cookie){
        console.log(cookie)
    } else {
        location.href = "http://127.0.0.1:5500/8-4%20HW/signup/index.html"
    }
// })

let grabbedData = data.getItem(cookie).split(",")

let username = document.getElementById("name")
let getname = document.getElementById("getname")
let mail = document.getElementById("mail")
let password = document.getElementById("password")
let logout = document.getElementById("logout")
let info = document.getElementById("info")

username.innerHTML = grabbedData[1]

getname.addEventListener("mouseover", function(){
    info.innerHTML = "My Name Is:"
    username.innerHTML = grabbedData[1]
})

mail.addEventListener("mouseover", function(){
    info.innerHTML = "My Email Is:"
    username.innerHTML = cookie.split("Users-")[1]
})

password.addEventListener("mouseover", function(){
    info.innerHTML = "My Password Is:"
    username.innerHTML = grabbedData[0]
})

logout.addEventListener("click", function(){
    data.removeItem("LoggedOn")
    location.href = "http://127.0.0.1:5500/8-4%20HW/signup/index.html"
})