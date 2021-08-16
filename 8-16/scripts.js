// fetch('https://jsonplaceholder.typicode.com/users')

let dashboard = document.getElementById("dashboard")
let overview = document.getElementById("overview")

let topic = "DETAILS"

let posts = document.getElementById("posts")
let details = document.getElementById("details")
let comments = document.getElementById("comments")
let albums = document.getElementById("albums")

let idinput = document.getElementById("idInput")
let changeid = document.getElementById("changeId")



let yourId = 2

function displayDetails(el) {
    overview.insertAdjacentHTML('afterbegin', `
    <div class="post rounded-xl bg-white my-4 shadow-lg">
    <div class="post_header w-full px-5 py-3">
        <h1 class="font-bold text-l">
            NAME: ${el.name}
        </h1>
        <h1 class="font-bold text-l">
            USERNAME: ${el.username}
        </h1>
        <h1 class="font-bold text-l">
            EMAIL: ${el.email}
        </h1>
        <h1 class="font-bold text-xl">---ADDRESS---</h1>
        <h1 class="font-bold text-l">
            STREET: ${el.address.street}
        </h1>
        <h1 class="font-bold text-l">
            SUITE: ${el.address.suite}
        </h1>
        <h1 class="font-bold text-l">
            CITY: ${el.address.city}
        </h1>
        <h1 class="font-bold text-l">
            ZIPCODE: ${el.address.zipcode}
        </h1>
        <h1 class="font-bold text-xl">---CONTACTS---</h1>
        <h1 class="font-bold text-l">
            PHONE: ${el.phone}
        </h1>
        <h1 class="font-bold text-l">
            WEBSITE: ${el.website}
        </h1>
        <h1 class="font-bold text-xl">---COMPANY---</h1>
        <h1 class="font-bold text-l">
            COMPANY NAME: ${el.company.name}
        </h1>
        <h1 class="font-bold text-l">
            CATCH PHRASE: ${el.company.catchPhrase}
        </h1>
        <h1 class="font-bold text-l">
            BS: ${el.company.bs}
        </h1>
    </div>
    <input value="${el.id}" hidden>
    <div class="post rounded-xl my-4 shadow-lg">
    <div class="post_header w-full px-5 py-3">
    <input value="${el.id}" hidden>
    </div>
    </div>
    `)
}



function clear(){
    while(overview.firstChild) {
        overview.removeChild(overview.firstChild);
    }
}

function displayPosts(el) {
    overview.insertAdjacentHTML('afterbegin', `
    <div class="post rounded-xl bg-white my-4 shadow-lg">
    <div class="actualpost_head w-full flex items-center justify-between px-5 py-3">
        <h1 class="font-bold text-xl">
            ${el.title}
        </h1>
    </div>
    <div class="post_body px-5 py-3">
        ${el.body.slice(0, 219)}
    </div>
    <div class="container flex relative h-auto w-full position-fixed" id="displayComment">

    </div>
    <input value="${el.id}" hidden>
</div>
    `)
}

function createDetails(json){
    json.forEach(el => {
        if (el.id == yourId) {
            displayDetails(el)
        }
    })
}

fetch('./data.json')
.then(response => response.json())
.then(json => {
    createDetails(json)
    details.addEventListener("click", function () {
        clear()
        createDetails(json)
    })
});

fetch("http://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(response => {
    posts.addEventListener("click", function(){
        clear()
        response.forEach(el => {
            if(el.userId == yourId) {
                displayPosts(el)
            }
        })
    })
})

function displaytodos(el){
    overview.insertAdjacentHTML('afterbegin', `
    <div class="post rounded-xl bg-white my-4 shadow-lg">
    <div class="post_header w-full flex items-center justify-between px-5 py-3">
        <h1 class="font-bold text-xl">
            COMPLETED STATUS: ${el.completed}
        </h1>
    </div>
    <div class="post_body px-5 py-3">
        ${el.title}
    </div>
    <input value="${el.id}" hidden>
</div>
    `)
}  

fetch("http://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(res => {
    comments.addEventListener("click", function(){
        clear()
        res.forEach(el => {
            if(el.userId == yourId){
                displaytodos(el)
            }
        })
    })
})

function displayAlbums(el){
    overview.insertAdjacentHTML('afterbegin', `
    <div class="post rounded-xl bg-white my-4 shadow-lg">
    <p>ALBUM: </p>
    <div class="post_header w-full flex items-center justify-between px-5 py-3">
        <h1 class="font-bold text-xl">
            ${el.title}
        </h1>
    </div>
    <input value="${el.id}" hidden>
    </div>
    `) 
}

fetch("http://jsonplaceholder.typicode.com/albums")
.then(response => response.json())
.then(res => {
    albums.addEventListener("click", function(){
        clear()
        res.forEach(el => {
            if(el.userId == yourId){
                displayAlbums(el)
            }
        })
    })
})

fetch('http://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(json => {
    document.addEventListener("click", e => {
        if(e.target.classList.contains("actualpost_head")) {
            json.forEach(el => {
                if(el.postId == e.target.nextElementSibling.nextElementSibling.nextElementSibling.value){
                    console.log(el.body)
                }
            })
        }
    })
});

function resetToDefault(){
    setTimeout(function(){
        changeid.value = "Change User Id lol"
    }, 3000)
}

changeid.addEventListener('click', function(){
    if(idinput.value != "" && parseInt(idinput.value)){
        yourId = parseInt(idinput.value)
        changeid.value = "Successfully changed ID!"
        resetToDefault()
    } else {
        changeid.value = "Uh oh! Something went wrong!"
        resetToDefault()
    }
})