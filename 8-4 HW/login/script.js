let EmailLogIn = document.getElementById("MailLogIn")
let passwordInputLogIn = document.getElementById("PasswordLogIn")
let LogInButton = document.getElementById("LogInButton")

let data = localStorage

let loginkey = "Users-"+EmailLogIn.value

LogInButton.addEventListener("click", function(){
    if(EmailLogIn.value != ""){
        if(passwordInputLogIn.value != ""){
            if(data.getItem(loginkey)){
                if(passwordInputLogIn.value === data.getItem(loginkey)){
                    console.log("looks good!")
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