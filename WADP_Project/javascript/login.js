//Close and open

var logincontainer = document.getElementById("logincontainer");
var login = document.getElementById("login");

function showlogin(){
    logincontainer.style.display = "block";
    login.style.display = "block";
}

function closelogin(){
    logincontainer.style.display = "none";
    login.style.display = "none";
}

//Login script

users = JSON.parse(localStorage.getItem("username"));
password = JSON.parse(localStorage.getItem("password"));

// function gologin(){
//     var inputUsername = document.getElementById("username").value.toLowerCase();
//     var inputPassword = document.getElementById("password").value;

//     for(i = 0; i < users.length; i++){
//         if(inputUsername == users[i].username && inputPassword == users[i].password){

//             logincontainer.style.display = "none";
//             login.style.display = "none";
            
//             return
//         }
        
//     }

// }

function gologin(){
    var inputUsername = document.getElementById("username").value.toLowerCase();
    var inputPassword = document.getElementById("password").value;

    for(i = 0; i < users.length; i++){
        if(inputUsername == users[i] && inputPassword == password[i]){

            logincontainer.style.display = "none";
            login.style.display = "none";
            
            
        }

        console.log("Fail")
    }

}
function checkEnter(event){
    if (event.keyCode == 13){
        gologin();
    }
}
