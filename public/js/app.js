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


let choose = prompt("what do you want : (sign up / log in / change password )")

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

    let email = prompt("Insert a valid email:").trim()
    let lowerCase = email.toLowerCase()

    while (
        lowerCase.includes(" ") || lowerCase.length < 10 ||
        !lowerCase.includes("@") || lowerCase.split('@').length !== 2 || dataUser.some(e => e.email === lowerCase)
    ) {
        if (dataUser.some(e => e.email === lowerCase)) {
            alert("This email already exists.")
        } else {
            alert("Invalid email. Try again.")
        }
        email = prompt("Insert a valid email:").trim()
        lowerCase = email.toLowerCase()
    }


    // ^ age part

    let age = prompt("Enter your age:")

    while (age.trim() !== age || age.includes(" ") || !/^\d+$/.test(age) || age.length === 0 || age.length > 2 || parseInt(age) === 0 ||
        parseInt(age) < 18
    ) {
        alert("Invalid age. Please enter a valid number without  letters")
        age = prompt("Enter your age:")
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

// ? Log in part
const logIn = () => {
    let email = prompt("Enter your email:").trim().toLowerCase();

    if (!dataUser.some(e => e.email === email)) {
        alert("This email does not exist, you need to sign up!");
        return;
    }

    let pass = prompt("Enter your password to log in:").trim();

    while (!dataUser.some(e => e.email === email && e.password === pass)) {
        alert("Your password is incorrect, try again:");
        pass = prompt("Enter your password to log in:").trim();
    }

    alert("you logged successfully , welcome back");
}

const changePass = () => {
    let email = prompt('Enter your email:')

    let user = dataUser.find(user => user.email === email)

    if (!user) {
        alert("This email does not exist. Please sign up first.")
        return;
    }

    let newPass = prompt('Enter your new password:')

    while (!/[@#\-\+\*\/]/.test(newPass) || newPass.length < 7) {
        newPass = prompt('try another password :')
    }

    user.password = newPass;
    let confirm = prompt("confirm your password :")
    while (confirm != newPass) {
        confirm = prompt("try again :")
    }

    alert("Password changed successfully!");

    dataUser.push(dataUser.find(user => user.password === newPass))
}




while (!["sign up", "log in", "change password"].includes(choose)) {
    alert("Option doesn't exist");
    choose = prompt("Enter one of these: (sign up / log in / change password)")
}
switch (choose) {

    case "sign up":
        signUp()
        break;

    case "log in":
        logIn()
        break;

    case "change password":
        changePass()
        break;

    default:

        break;
}




