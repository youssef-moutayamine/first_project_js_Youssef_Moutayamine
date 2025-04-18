let dataUser = []

class User {
    constructor(fullname, email, age, password) {
        this.fullname = fullname
        this.email = email
        this.age = age
        this.password = password
    }
}

let ana = new User("youssef moutayamine", "youssef1939@gmail.com", 19, "password123@")
dataUser.push(ana)
console.log(dataUser);


let choose = prompt("what do you want : (sign up / log in / change your password )")

// * Sign up part
const signUp = () => {

    // & part of name
    let userName = prompt("Enter your Full Name :").trim()

    let capitalized = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()


    while (capitalized.replace(/\s/g, '').length < 5 || /[^a-zA-Z\s]/.test(capitalized)) {
        capitalized = prompt("Your name is invalid. Must have at least 5 letters and no numbers or special characters. Try again:").trim();
    }
    capitalized = capitalized.split(' ').map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(' ')




}






const logIn = () => {
    let email = prompt("Enter your email !")
    // while (email != dataUser.email ) {
    //     prompt(email)
    // }
}


switch (choose) {

    case "sign up":
        signUp()
        break;

    case "log in":
        // logIn()
        break;

    default:


        break;
}
