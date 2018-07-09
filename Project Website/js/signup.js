var username = JSON.parse(localStorage.getItem("username")); 
var password = JSON.parse(localStorage.getItem("password"));

function signup(){
    var invalidcharacters = []

    var inusername = document.getElementById("username").value;
    var inpassword = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;

    var usernamechar = inusername.split(""); //Turns the username into a list. Makes it easier to check for invalid characters

    var invalid = document.querySelector("#signup p.signupinv")

    // for (i = 0; i < username.length; i++)
    // {
        if (email == "", inusername == "", inpassword == "") {
            invalid.innerHTML = "Please fill in the form."
            invalid.style.display = "block";
            
        }
        else if (inpassword != confirmPassword){
            invalid.innerHTML = "Passwords does not match."
            invalid.style.display = "block";
            
        }
        else if(inusername.indexOf('')){

        }
        else if (username.indexOf(inusername) != -1){
            
            invalid.innerHTML = "Username has been taken"
            invalid.style.display = "block";
        }
        else{

        username.push(inusername)
        password.push(inpassword)

        console.log(`${inusername} has signed up!`)

        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("password", JSON.stringify(password));

        window.location.href = "./home.html"

        }
    // }   

    
}

//Checks enter event

function checkEnter(event){
    if (event.keyCode == 13){
        signup();
    }
}