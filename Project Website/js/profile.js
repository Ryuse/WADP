//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users")); 
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

//Getting the elements
var title = document.getElementById("title");

var profilename = document.getElementById("detailname");
profilename.innerHTML = currentuser + ' the' + title.innerHTML;

//Picture

var pictureContainer = document.querySelector("#picture img");
pictureContainer.src = users[account()].picture

var cloud = "../../images/Profile Pictures/Cloud.png"
var earth = "../../images/Profile Pictures/Earth.png"
var leaf = "../../images/Profile Pictures/Leaf.png"
var plant = "../../images/Profile Pictures/Plant.png"
var tree = "../../images/Profile Pictures/Tree.png"

var pictures = [cloud, earth, leaf, plant, tree]

function changepic(i){
    pictureContainer.src = pictures[i]
    users[account()].picture = pictures[i]
    localStorage.setItem("users", JSON.stringify(users));
    location.reload()
    
}

function account(){
    for(i=0; i<users.length; i++){
        if(currentuser == users[i].username)
        return i
    }
}