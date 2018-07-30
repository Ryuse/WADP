//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users")); 
var currentuser = JSON.parse(localStorage.getItem("currentuser"));
var titles = users[account()].titles;

//To find the right account
function account(){
    for(i=0; i<users.length; i++){
        if(currentuser == users[i].username)
        return i
    }
}

//Gets the popup element
var popup = document.getElementById("popup");

//Shows and adds Curious title to user
function curioustitle(){
    if(currentuser != undefined && currentuser != null && titles.indexOf('Curious') == -1){

        popup.style.display = "block"
        titles.push('Curious');
        localStorage.setItem("users", JSON.stringify(users));
        setTimeout(
            function(){
                popup.style.display = "none"
            },
             5000);

        users[account()].messages.push("You have gained the title Curious!");
        localStorage.setItem("users", JSON.stringify(users));

        
    }
}

function closecurious(){
    popup.style.display = "none"
}