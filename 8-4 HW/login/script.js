let EmailLogIn = document.getElementById("MailLogIn")
let passwordInputLogIn = document.getElementById("PasswordLogIn")
let LogInButton = document.getElementById("LogInButton")
let data = localStorage
let cookie = data.getItem("LoggedOn")

LogInButton.addEventListener("click", function(){
let loginkey = "Users-"+EmailLogIn.value
    if(EmailLogIn.value != ""){
        if(passwordInputLogIn.value != ""){
            if(data.getItem(loginkey)){
                // console.log(data.getItem(loginkey).split("")[0])
                if(passwordInputLogIn.value === data.getItem(loginkey).split(",")[0]){
                    data.setItem("LoggedOn", loginkey)
                    location.href = "http://127.0.0.1:5500/8-4%20HW/main/index.html"
                } else {
                    console.log("Password Incorrect")
                }
            } else {
                console.log("email does not exist")
            }
        } else {
            return
        }
    } else {
        return
    }
})