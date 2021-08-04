// i - ignore the cases, returns the first one it sees. let regEx = /died|lol|mom/i;
// g - adds them in a table. let regEx = /died|lol|mom/g;
// | - or. let regEx = /died|lol|mom/;
// * - leaves the rest. let regEx = /died|lol|mom/ig;
// + - 
// ^ - carret - checks if the first letter starts by the character you want. let regEx = /^y/ig;
// $ - reverse of carret. let regEx = /y$/ig; (literally)
// [] - grabs all the letter. let regEx = /[m]/ig;
// . - all character. let regEx = /./ig;
// ONLY IN SQUARE BRACKETS:
// a-z - all small characters. let regEx = /[a-z]/ig;
// A-Z - ALL CAPITAL CHARACTERS. let regEx = /[A-Z]/ig;
// 0-9 - ALL NUMBERS. let regEx = /[0-9]/ig;
// [^(letter)] - look for everything but that. let regEx = /[^(input letter without the brackets)]/g;
// \ - escape operator
// \W - special characters(!!@#$%^&*).
// \w - all characters BUT special
// \D - Everything but numbers
// \d - Only numbers
// \S - Everything but wide space
// \s - only wide spaces
// {8} - word letters
// {8,} - more than 8 characters
// {1,8} - 1-8 characters DUH!
// {,8} = less than 8 characters

let passwordInput = document.getElementById("Password")
let SignUpButton = document.getElementById("signUpButton")
let UserName = document.getElementById("Name")
let Email = document.getElementById("Mail")
let verifyPassword = document.getElementById("RePassword")
let info = document.getElementById("info")
let lowerNeed = document.getElementById("smallNeed")
let capitalNeed = document.getElementById("capitalNeed")
let specialNeed = document.getElementById("specialNeed")
let numberNeed = document.getElementById("numberNeed")
let lengthNeed = document.getElementById("lengthNeed")

const users = [];

class User {
    constructor(name, email, password){
        this.email = email;
        this.name = name;
        this.password = password;
    }
}

let isSignUppable = false
let UserNameCheck = false
let EmailCheck = false
let verify = false

let lowerString = /[a-z]/;
let capitalString = /[A-Z]/;
let number = /\d/;
let specialCharacter = /\W/;
let length = /.{8,}/

let checks = [
    numberCheck = false,
    lowerCheck = false,
    capitalCheck = false,
    lengthCheck = false,
    specialCheck = false,
]

function throwError(ErrorMessage){
    isSignUppable = false;
    info.innerHTML = "ERROR: " + ErrorMessage;
}

function changeBorderColor(){
    if(UserNameCheck == true){
        if(EmailCheck == true) {
            if(isSignUppable == true){
                if(verify == false){
                    verifyPassword.style.cssText = `
                    border-color: rgb(255,0,0);
                    `;
                    SignUpButton.style.cssText = `
                    background-color: rgb(255,0,0);
                    `;
                } else {
                    verifyPassword.style.cssText = `
                    border-color: rgb(0,255,0);
                    `;
                    SignUpButton.style.cssText = `
                    background-color: rgb(0,255,0);
                    `;
                }
            }
        }
    }
}

function addClasses(parameter){
    parameter.style.cssText = `
    text-decoration: line-through;
    color: rgb(0,255,0);
  `;
}

function removeClasses(parameter){
    parameter.style.cssText = `
    text-decoration: none;
    color: rgb(255,0,0);
  `;
}

UserName.addEventListener("input", function(){
    info.innerHTML = ""
    UserNameCheck = false;
    if(UserName.value === ""){
        UserName.style.cssText = `
        border-color: rgb(255,0,0);
        `;
    } else {
        if(UserName.value.split("").length > 3){
            UserNameCheck = true
            UserName.style.cssText = `
    border-color: rgb(0,255,0);
  `;
        } else {
            info.innerHTML = "ERROR: USERNAME MUST HAVE ATLEAST 3 CHARACTERS"
        }
    }
})

verifyPassword.addEventListener("input", function(){
    info.innerHTML = ""
    verify = false
    if(verifyPassword.value === passwordInput.value){
        info.innerHTML = ""
        verify = true
        verifyPassword.style.cssText = `
        border-color: rgb(0,255,0);
        `;
    } else {
        info.innerHTML = "ERROR: PASSWORDS DOES NOT MATCH"
        verifyPassword.style.cssText = `
        border-color: rgb(255,0,0);
        `;
    }
    changeBorderColor()
})

Email.addEventListener("input", function(){
    info.innerHTML = ""
    EmailCheck = false;
    if(Email.value === ""){
        Email.style.cssText = `
    border-color: rgb(255,0,0);
  `;
    } else {
        if(Email.value.split("").length > 3){
            EmailCheck = true
            Email.style.cssText = `
    border-color: rgb(0,255,0);
  `;
        } else {
            this.innerHTML = "ERROR: EMAIL MUST HAVE ATLEAST 3 CHARACTERS"
        }
    }
})

passwordInput.addEventListener("input", function(){
    isSignUppable = false;
    // NEW
    if(passwordInput.value === ""){
        throwError("lololololol you can't see me!")
        removeClasses(specialNeed)
        removeClasses(numberNeed)
        removeClasses(capitalNeed)
        removeClasses(lowerNeed)
        removeClasses(lengthNeed)
        info.innerHTML = ""
    } else {

    }

    if(length.test(passwordInput.value)){
        checks[0]= true
        addClasses(lengthNeed)
    } else {
        checks[0]= false
        removeClasses(lengthNeed)
    }
    if(number.test(passwordInput.value)){
        checks[1] = true
        addClasses(numberNeed)
    } else {
        checks[1]= false
        removeClasses(numberNeed)
    }
    if(lowerString.test(passwordInput.value)){
        checks[2] = true
        addClasses(lowerNeed)
    } else {
        checks[2]= false
        removeClasses(lowerNeed)
    }
    if(capitalString.test(passwordInput.value)){
        checks[3] = true
        addClasses(capitalNeed)
    } else {
        checks[3]= false
        removeClasses(capitalNeed)
    }
    if(specialCharacter.test(passwordInput.value)){
        checks[4] = true
        addClasses(specialNeed)
    } else {
        checks[4]= false
        removeClasses(specialNeed)
    }

    for(let i=0; i<5; i++){
        if(checks[i] == true){
            if(i==4){
                isSignUppable = true
                break
            }
        } else {
            break
        }
    }
    // OLD
    // if(passwordInput.value === ""){
    //     throwError("lololololol you can't see me!")
    //     removeClasses(specialNeed)
    //     removeClasses(numberNeed)
    //     removeClasses(capitalNeed)
    //     removeClasses(lowerNeed)
    //     removeClasses(lengthNeed)
    //     info.innerHTML = ""
    // } else {
    //     if(length.test(passwordInput.value)){
    //         addClasses(lengthNeed)
    //         if(lowerString.test(passwordInput.value)){
    //             addClasses(lowerNeed)
    //             if(capitalString.test(passwordInput.value)){
    //                 addClasses(capitalNeed)
    //                 if(number.test(passwordInput.value)){
    //                     addClasses(numberNeed)
    //                     if(specialCharacter.test(passwordInput.value)){
    //                         addClasses(specialNeed)
    //                         info.innerHTML = "READY FOR SIGN UP";
    //                         isSignUppable = true;
    //                     } else {
    //                         removeClasses(specialNeed)
    //                         throwError("PASSWORD MUST HAVE TO HAVE A ATLEAST ONE SPECIAL CHARACTER")
    //                     }
    //                 } else {
    //                     removeClasses(numberNeed)
    //                     throwError("PASSWORD MUST HAVE TO HAVE ATLEAST ONE NUMBER")
    //                 }
    //             } else {
    //                 removeClasses(capitalNeed)
    //             throwError("PASSWORD MUST HAVE TO HAVE A CAPITAL LETTER")
    //             }
    //         } else {
    //             removeClasses(lowerNeed)
    //             throwError("PASSWORD MUST HAVE TO HAVE A LOWER LETTER")
    //         }
    //     } else {
    //         removeClasses(lengthNeed)
    //         throwError("PASSWORD MUST HAVE ATLEAST 8 CHARACTERS");
    //     }
    // }
})

function reset(){
    UserName.value = "";
    Email.value = "";
    passwordInput.value = "";
    verifyPassword.value = "";
}

SignUpButton.addEventListener("click", function(){
    if(isSignUppable == true){
        if(UserNameCheck != false){
            if(EmailCheck != false){
                if(isSignUppable != false) {
                    if(verify != false){
                        const user = new User(UserName.value, Email.value, passwordInput.value)
                        reset();
                        users.push(user);
                        localStorage.setItem("Users", JSON.stringify(users))
                    } else {
                        verifyPassword.style.cssText = `
                        border-color: rgb(255,0,0);
                        `;
                    }
                } else {
                    removeClasses(specialNeed)
                    removeClasses(numberNeed)
                    removeClasses(capitalNeed)
                    removeClasses(lowerNeed)
                    removeClasses(lengthNeed)
                    throwError("PLEASE INPUT PASSWORD")
                }
            } else {
                Email.style.cssText = `
                border-color: rgb(255,0,0);
              `;
            }
        } else {
            UserName.style.cssText = `
            border-color: rgb(255,0,0);
          `;
        }
    } else {
        removeClasses(specialNeed)
        removeClasses(numberNeed)
        removeClasses(capitalNeed)
        removeClasses(lowerNeed)
        removeClasses(lengthNeed)
        throwError("PLEASE INPUT PASSWORD")
    }
});