var username = []
var password = []

function signup(){


    var inusername = document.getElementById("username").value;
    var inpassword = document.getElementById("password").value;

    // username.push(inusername);
    // password.push(inpassword);

    // var inpassword2 = document.getElementById("confirmPassword").value;
    // var inemail = document.getElementById("email").value

    username.push(inusername)
    password.push(inpassword)

    console.log(`${inusername} has signed up!`)

    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));

    // localStorage.removeItem(username)
    // localStorage.removeItem(password)

    window.location.href = "./home.html"
}