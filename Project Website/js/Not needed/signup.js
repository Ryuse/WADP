var username = []
var password = []

function signup(){
    var invalidcharacters = []
    //New user status

    var newuser = {
        username:'',
        password:'',
        email:'',
        picture:'../../images/Profile Pictures/Plant.png',
        level: 1,
        quizdone: 0,
        quizmade: 0,
        title: 0,
        badges: 0 
}

    //Getting their inputs
    var inusername = document.getElementById("username").value;
    var inpassword = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;

    var usernamechar = inusername.split(""); //Turns the username into a list. Makes it easier to check for invalid characters

    var invalid = document.querySelector("#signup p.signupinv")

        if (email == "", inusername == "", inpassword == "") {
            invalid.innerHTML = "Please fill in the form."
            invalid.style.display = "block";
            
        }
        else if(inusername.length > 8){
            invalid.innerHTML = "Username too long"
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

        window.location.href = "./home2.html"

        }
    // }   

    
}

//Checks enter event

function checkEnter(event){
    if (event.keyCode == 13){
        signup();
    }
}