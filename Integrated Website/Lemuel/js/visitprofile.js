//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users"));
var visituser = JSON.parse(localStorage.getItem("visituser")); //Gets the visit user

//Getting the elements

var currenttitles = users[visituser].currenttitle;
var title = document.getElementById("title");
title.innerHTML = currenttitles;

var profilename = document.getElementById("detailname");
profilename.innerHTML = users[visituser].username + ' the ' + title.innerHTML;

//Picture

var pictureContainer = document.querySelector("#picture img");
pictureContainer.src = users[visituser].picture


// Printing titles in the title container

var titlecontainer = document.getElementById("titleslist");
var titles = users[visituser].titles;


for (i = 0; i < titles.length; i++) {
    (function (i) {
        p = document.createElement('p');
        p.innerHTML = titles[i];
        p.className = "title";
        var hr = document.createElement('HR');

        titlecontainer.appendChild(p);
        titlecontainer.appendChild(hr);
    })(i);
}

//Finds current account
function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}

requestbutton = document.getElementById("addfriend")

//changes button to already friends or request sent
if(users[account()].friends.indexOf(users[visituser].username) != -1 && users[visituser].friends.indexOf(users[account()].username) != -1 )
{
    requestbutton.innerHTML = "Already Friends"
    requestbutton.disabled = true;
}
else if (users[account()].requestsent.indexOf(users[visituser].username) != -1 ){
    requestbutton.innerHTML = "Request Sent"
    requestbutton.disabled = true;
}

function sendrequest() {

    if (users[account()].requestsent == null) {
        users[account()].requestsent = []
        localStorage.setItem("users", JSON.stringify(users));
    }

    if(users[visituser].friendrequest == null) {
        users[visituser].friendrequest = []
        localStorage.setItem("users", JSON.stringify(users));
    }
   

    if (users[account()].requestsent.indexOf(users[visituser].username) == -1 ) {

        requestbutton.innerHTML = "Request Sent"
        requestbutton.disabled = true;
        users[account()].requestsent.push(users[visituser].username);
        
        users[visituser].messages.push(`<p id='friendrequest${String(users[account()].username)}'> ${String(users[account()].username)} has sent a friend request. Accept? </p> <button class='btn btn-success' id='friendbutton${String(users[account()].username)}' onclick='acceptfriend("${String(users[account()].username)}")'>Yes</button> <button class='btn btn-success' id='friendbuttonno${String(users[account()].username)}' onclick='rejectfriend("${String(users[account()].username)}")'>No</button>`);
        localStorage.setItem("users", JSON.stringify(users));

    }

    
}

//Recentactivities

var activitycontainer = document.getElementById("activites")

for (q = users[visituser].messages.length-1; q > -1; q--) {
    if (users[visituser].messages == []) {
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

//Printing friend in profile

for(v = 0; v < users[visituser].friends.length; v++){
    (function(boat){
        friend = findaccount(users[visituser].friends[boat])

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

        table.insertBefore(friendcontainer, table.firstChild)
    })(v);
}

//returns index of chosen user
function findaccount(namee) {
    for (i = 0; i < users.length; i++) {
        if (String(namee) == users[i].username)
            return i
    }
}