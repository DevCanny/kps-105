let obj = {
    username: "mightybaseplate",
    getName: function(){
        return this.username
    },
    setNameAndAge(name, age){
        this.username = name
        this.age = age
        return {
            name,
            age
        }
    },
}

let obj1 = {
    username: "Jean",
}

let obj2 = {
    username: "Sarah",
}

const setName = obj.setNameAndAge.call(obj, "Mohammed", 23)
const setName1 = obj.setNameAndAge.call(obj1, "Lorane", 19)
const setName2 = obj.setNameAndAge.call(obj2, "Daniel", 21)

//LEARN BIND AND APPLY FOR IIFY

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call