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

    //  ^ Email part
    
    let email = prompt("Insert a valid email:").trim();
    let lowerCase = email.toLowerCase();

    while (
        lowerCase.includes(" ") || lowerCase.length < 10 ||
        !lowerCase.includes("@") || lowerCase.split('@').length !== 2 || dataUser.some(e => e.email === lowerCase)
    ) {
        if (dataUser.some(e => e.email === lowerCase)) {
            alert("This email already exists.");
        } else {
            alert("Invalid email. Try again.");
        }
        email = prompt("Insert a valid email:").trim();
        lowerCase = email.toLowerCase();
    }


    // ^ age part

    let age = prompt("Enter your age:");

    while (age.trim() !== age || age.includes(" ") || !/^\d+$/.test(age) || age.length === 0 || age.length > 2 || parseInt(age) === 0 ||
        parseInt(age) < 18
    ) {
        alert("Invalid age. Please enter a valid number without  letters");
        age = prompt("Enter your age:");
    }


    // ! password part

    let password = prompt("Enter a valid password :").trim()
    while (!/[@#\-\+\*\/]/.test(password || password.length < 7)) {
        password = prompt("try another password ")
    }
    dataUser.push(new User(capitalized, lowerCase, age, password))

    let confirm = prompt("confirm your password :")
    while (confirm != password) {
        confirm = prompt("try again :")
    }


}



const logIn = () => {
    let email = prompt("Enter your email !")
    // while (email != dataUser.email ) {
    //     prompt(email)
    // }
}

while (!["sign up", "log in", "change your password"].includes(choose)) {
    alert("Option doesn't exist");
    choose = prompt("Enter one of these: (sign up / log in / change your password)")
}
switch (choose) {

    case "sign up":
        signUp()
        break;

    case "log in":
        break;

    default:

        break;
}


