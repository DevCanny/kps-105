
let data = localStorage
let cookie = data.getItem("LoggedOn")

// document.addEventListener("load", function(){
    if(cookie){
        // console.log(cookie)
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
let avatar = document.getElementById("avatar")
let timeline = document.getElementById("timeline")


let postButton = document.getElementById("postButton")
let body = document.getElementById("body")
let title = document.getElementById("title")

// DISPLAY DETAILS

class Post {
    constructor(title, body){
        this.title = title;
        this.body = body;
        this.userId = cookie;
        this.id = Math.random().toString().split(".")[1]
        this.created = new Date();
    }
}

let postsTable = [];

username.innerHTML = grabbedData[1]

getname.addEventListener("mouseover", function(){
    info.innerHTML = "My Name Is:"
    username.innerHTML = grabbedData[1]
})

mail.addEventListener("mouseover", function(){
    info.innerHTML = "My Email Is:"
    username.innerHTML = cookie.split("Users-")[1]
})

avatar.src = grabbedData[2]

password.addEventListener("mouseover", function(){
    info.innerHTML = "My Password Is:"
    username.innerHTML = grabbedData[0]
})

timeline.addEventListener("click", function(){
    location.href = "http://127.0.0.1:5500/8-4%20HW/main/timeline.html"
})

logout.addEventListener("click", function(){
    data.removeItem("LoggedOn")
    location.href = "http://127.0.0.1:5500/8-4%20HW/signup/index.html"
})

// POST SOME POSTS

if(localStorage['posts']){
    postsTable = JSON.parse(localStorage.getItem('posts'))
}

let currentUserPosts = postsTable.filter(el => el.userId === cookie)

let formvalid = false;

function reset(){
    title.value = "";
    body.value = "";
}

postButton.addEventListener("click", e =>{
    e.preventDefault();
    if(title.value === ""){
        title.classList.add("border-red-400")
        title.classList.add("placeholder-red-400")
        formvalid = false;
    } else {
        title.classList.remove("border-red-400")
        title.classList.remove("placeholder-red-400")
    }
    if(body.value === ""){
        body.classList.add("border-red-400")
        body.classList.add("placeholder-red-400")
        formvalid = false;
    } else {
        body.classList.remove("border-red-400")
        body.classList.remove("placeholder-red-400")
        formvalid = true;
    }
    if(!formvalid){
        swal({
            icon: 'warning',
            title: 'WARNING',
            text: 'You may NOT leave a space open'
        })
        return
    } else {
        let post = new Post(title.value, body.value)
        postsTable.push(post)
        localStorage.setItem("posts", JSON.stringify(postsTable))
        localStorage.setItem('currentPost', JSON.stringify(post.id));
        location.href = "http://127.0.0.1:5500/8-4%20HW/main/readPost.html"
        reset()
       
        // console.log(post)
    }
})