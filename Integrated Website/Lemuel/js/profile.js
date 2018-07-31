//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

//Getting the elements

var currenttitle = users[account()].currenttitle;
var title = document.getElementById("title");
title.innerHTML = currenttitle;

var profilename = document.getElementById("detailname");
profilename.innerHTML = currentuser + ' the ' + title.innerHTML;

//Picture

var pictureContainer = document.querySelector("#picture img");
pictureContainer.src = users[account()].picture

//Picture locations

var cloud = "../../images/Profile Pictures/Cloud.png"
var earth = "../../images/Profile Pictures/Earth.png"
var leaf = "../../images/Profile Pictures/Leaf.png"
var plant = "../../images/Profile Pictures/Plant.png"
var tree = "../../images/Profile Pictures/Tree.png"

var pictures = [cloud, earth, leaf, plant, tree]

//Functions
function changepic(i) {
    console.log(i.src)
    pictureContainer.src = i.src
    users[account()].picture = i.src
    document.getElementById("profilepic").src = users[account()].picture
    localStorage.setItem("users", JSON.stringify(users));

}

function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}

for(img = 0; img < users[account()].availablepictures.length; img++){
    imgcontlist = document.getElementById("imglist")
    
    imgcont = document.createElement("div")
    imgcont.className = "imgcontainer"

    imgs = document.createElement("img")
    imgs.src = users[account()].availablepictures[img].src
    imgs.className = "mx-auto d-block"
    imgs.setAttribute("data-dismiss", "modal")
    imgs.setAttribute("onclick", "changepic(this)")
    
    imgcont.appendChild(imgs)
    imgcontlist.appendChild(imgcont)
}

// Printing titles in the title container

var titlecontainer = document.getElementById("titleslist");
var titles = users[account()].titles;



/*I had issues with this for hours. Thank you stackoverflow! https://stackoverflow.com/questions/11548768/loop-in-function-not-working
  This thing is harder to solve than I thought but thank you internet. 
*/
for (i = 0; i < titles.length; i++) {
    (function (i) {
        p = document.createElement('p');
        p.innerHTML = titles[i];
        p.className = "title";
        var hr = document.createElement('HR');

        var button = document.createElement('button');
        button.className = "btn btn-success btn-sm titlebutton"
        button.id = "titlebutton"
        button.innerHTML = "Use this title"

        button.onclick = function () {

            currenttitle = titles[i];
            

            /*Apparently this was the important thing that was missing. 
            Without this nothing would change even when setting local storage*/
            users[account()].currenttitle = currenttitle;


            localStorage.setItem("users", JSON.stringify(users));

            title.innerHTML = titles[i];
            profilename.innerHTML = currentuser + ' the ' + title.innerHTML;

            location.reload() //Reload to change the profile title

        }

        titlecontainer.appendChild(button);
        titlecontainer.appendChild(p);
        titlecontainer.appendChild(hr);
    })(i);
}

//Recent Activities
var activitycontainer = document.getElementById("activites")

for (q = users[account()].messages.length-1; q > -1; q--) {
    if (users[account()].messages == []) {
        var p = document.createElement("p")
        p.innerHTML = "You have no messages"
        p.className = "text-center"

        var hr = document.createElement("HR")
        activitycontainer.appendChild(p)
        activitycontainer.appendChild(hr)
    }
    else {
        (function (i) {
            var p = document.createElement("p")
            p.innerHTML = users[account()].messages[i];
            p.className = "text-center"

            var hr = document.createElement("HR")
            activitycontainer.appendChild(p)
            activitycontainer.appendChild(hr)
        })(q);
    }
}

//Friend system

function acceptfriend(name){

    name = users[findaccount(name)].username

    buttons = document.getElementById("friendbutton" + name)
    nobutton = document.getElementById("friendbuttonno" + name)

    buttons.style.display = "none";
    nobutton.style.display = "none";
    
    idname = "friendrequest" + name
    ptext = document.getElementById(idname)
    ptext.innerHTML = name + " is now your friend"

    //Changes message permanently to friend
    users[account()].messages[findmessage(idname)] = name + " is now your friend"

    //Sends message to sender about result
    users[findaccount(name)].messages.push(String(users[account()].username) + " has accepted your friend request")

    //Makes both accounts friends
    users[account()].friends.push(name)
    users[findaccount(name)].friends.push(users[account()].username)

    //Saves everything
    localStorage.setItem("users", JSON.stringify(users));
}

function rejectfriend(name){

    nobutton = document.getElementById("friendbuttonno" + name)
    buttons = document.getElementById("friendbutton" + name)

    buttons.style.display = "none";
    nobutton.style.display = "none";

    idname = "friendrequest" + name
    ptext = document.getElementById(idname)

    ptext.innerHTML = "You have rejected " + name + "'s request"

    //Changes message permanently to rejected
    users[account()].messages[findmessage(idname)] = "You have rejected " + name + "'s request"


    //Sends message to sender about result
    users[findaccount(name)].messages.push(String(users[account()].username) + " has rejected your friend request")


    //Removes the sent request from sender. Sender can send friend request again.
    users[findaccount(name)].requestsent.splice(findrequestsent(name), 1)


    //Saves everything
    localStorage.setItem("users", JSON.stringify(users));
}

//returns index of chosen user
function findaccount(namee) {
    for (i = 0; i < users.length; i++) {
        if (String(namee) == users[i].username)
            return i
    }
}

//returns index of sender
function findrequestsent(sendername){
    number = users[findaccount(sendername)].requestsent.indexOf(users[account()].username)
    return number
}

//Finds message index
function findmessage(msg){
    for(a = 0; a < users[account()].messages.length; a++){
        if(users[account()].messages[a].indexOf(String(msg)) != -1){
            return a
        }
    }
}

//Printing friend in profile

for(f = 0; f < users[account()].friends.length; f++){
    (function(orange){
        friend = findaccount(users[account()].friends[orange])

        table = document.querySelector("#friendlisttable")
        friendcontainer = document.createElement("div")
        
        friendcontainer.className = "btn btn-outline-success"

        img = document.createElement("img");
        img.src = users[friend].picture;
        img.id = "friendimages"


        friendusername = document.createElement("p");
        friendusername.id = "friendinfowords"
        friendusername.className = "text-center"
        friendusername.innerHTML = users[friend].username + " the " + users[friend].currenttitle

        friendcontainer.appendChild(img)
        friendcontainer.appendChild(friendusername)

        friendcontainer.onclick = function (){
            friends = findaccount(users[account()].friends[orange])
            console.log(friends)
            localStorage.setItem("visituser", JSON.stringify(friends));
            window.location.href = "visitprofile.html"
        }
        table.insertBefore(friendcontainer, table.firstChild)
    })(f);
}

//Printing Badges in profile

for(b = 0; b < users[account()].availablepictures.length; b++){
    (function(kiwi){
        badgecontainer = document.getElementById("badgelist")

        imagecontainer = document.createElement('div');
        imagecontainer.id = "badgeimgcontainer"

        description = document.createElement('div')
        description.id = "badgeoverlay"

        p = document.createElement("p")
        p.innerHTML = users[account()].availablepictures[kiwi].desc
        p.id = "pictext"

        image = document.createElement("img");
        image.src = users[account()].availablepictures[kiwi].src;
        image.id = "badgesimages"

        description.appendChild(p)

        imagecontainer.appendChild(image);
        imagecontainer.appendChild(description)
        badgecontainer.appendChild(imagecontainer)
    })(b);
}




//Testing stuff and graveyard



// for(i = 0; i < document.getElementsByClassName("titlebutton").length; i++){
//     button = document.getElementsByClassName("titlebutton")[i]
//     button.addEventListener("click", changetitle(i)); 
// }

// function changetitle(na){
//     title.innerHTML = document.querySelectorAll("p.title")[na].innerHTML;
// }



            // currenttitle = titles[i];
            // title.innerHTML = titles[i];

            // users.currenttitle = currenttitle;

            // window.localStorage.setItem("users", JSON.stringify(users)); //This doesn't work for some reason
            // console.log(currenttitle)
            // console.log(title.innerHTML)
            // profilename.innerHTML = currentuser + ' the ' + title.innerHTML;