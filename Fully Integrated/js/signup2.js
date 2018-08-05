// var users = []
var users = JSON.parse(localStorage.getItem("users"));

//For first time load
if (users == null && users == undefined) {
    users = [{
            "username": "Administrator",
            "password": "123",
            "email": "123@21",
            "picture": "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/sword.png",
            "availablepictures": [
                { "src": "../images/Profile Pictures/Plant.png", "desc": "Starter Badge" }, 
            { "src": "../images/Profile Pictures/Tree.png", "desc": "Get 3 titles" }, 
            { "src": "../images/Profile Pictures/Leaf.png", "desc": "Get 7 titles" },
            { "src": "../images/Profile Pictures/Cloud.png", "desc": "Get 15 titles" },
            { "src": "../images/Profile Pictures/Earth.png", "desc": "Get 25 titles" }
        ],
            "level": 1,
            "quizdone": 0,
            "quizmade": 1,
            "titles": ["Greenhorn", "Curious", "Explorer", "Informed", "Friendly", "Likable", "Amiable", "Inquisitive", "Popular", "Superstar","Admin"],
            "currenttitle": "Admin",
            "friends": [],
            "messages": [],
            "requestsent": [],
            "friendrequest": [],
            "highscore": 9999999,
            "plans": [],
            "quizzes": [
                {
                    "name": "My quiz",
                    "by": "Administrator",
                    "img": "https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
                    "question": ["Welcome to the website!"], "options": [["Hi!", "Hello!", "Ok"]],
                    "answers": [0]
                }]
            
        }]

        quizzes =[
            {
                "name": "My quiz",
                "by": "Administrator",
                "img": "https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
                "question": ["Welcome to the website!"], "options": [["Hi!", "Hello!", "Ok"]],
                "answers": [0]
            }]

    localStorage.setItem("quizzes", JSON.stringify(quizzes));
    localStorage.setItem("users", JSON.stringify(users));
    // location.reload()
}

console.log(users)



function signup() {
    var invalidcharacters = []
    //New user status

    var newuser = {
        username: '',
        password: '',
        email: '',
        picture: '../images/Profile Pictures/Plant.png',
        availablepictures: [{ src: '../images/Profile Pictures/Plant.png', desc: 'Starter Badge' }],
        level: 1,
        quizdone: 0,
        quizmade: 0,
        titles: ['Greenhorn'],
        currenttitle: 'Greenhorn',
        friends: [],
        messages: [],
        requestsent: [],
        todo: [
            {
                date: "",
                time: "",
                do: "",
                remarks: "",
            },
        ]
    }

    //Getting their inputs
    var inusername = document.getElementById("username").value;
    var inpassword = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;

    var usernamechar = inusername.split(""); //Turns the username into a list. Makes it easier to check for invalid characters

    var invalid = document.querySelector("#signup p.signupinv");

    if (email == "", inusername == "", inpassword == "") {
        invalid.innerHTML = "Please fill in the form.";
        invalid.style.display = "block";

    }
    else if (inusername.length > 8) {
        invalid.innerHTML = "Username too long"
        invalid.style.display = "block";
    }
    else if (inpassword != confirmPassword) {
        invalid.innerHTML = "Passwords does not match."
        invalid.style.display = "block";

    }
    else if (checkduplicate(inusername)) {
        invalid.innerHTML = "Username has already been taken."
        invalid.style.display = "block";
    }
    else if (checkduplicatemail(email)) {
        invalid.innerHTML = "Email has already been taken."
        invalid.style.display = "block";
    }
    else {

        newuser.username = inusername;
        newuser.password = inpassword;
        newuser.email = email;

        console.log(`${inusername} has signed up!`)
        users.push(newuser);
        localStorage.setItem("users", JSON.stringify(users));


        window.location.href = "index.html"

    }
    // }   


}

//Checks enter event

function checkEnter(event) {
    if (event.keyCode == 13) {
        signup();
    }
}

//Checks for duplicate usernames

function checkduplicate(usernames) {
    isduplicate = false;
    for (i = 0; i < users.length; i++) {
        if (users[i].username == usernames) {
            isduplicate = true;
            console.log('It is a duplicate')
        }
    }

    return isduplicate
}

//Checks for duplicate emails

function checkduplicatemail(email) {
    isduplicate = false;
    for (i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            isduplicate = true;
            console.log('It is a duplicate')
        }
    }

    return isduplicate
}

