let userName = prompt("Who's there?", '');
console.log(userName)

if(userName === "Admin") {
    let password = prompt("Password?", '');

    if(password === "" || password === null) {
        alert("Cancelled");
    } else if(password === "TheMaster") {
        alert("Welcome!");
    } else {
        alert("Wrong password");
    };
} else if(userName === "" || userName === null) {
    alert("Cancelled");
} else {
    alert("I don't know who you are");
}