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
        "titles": ["Greenhorn", "Curious", "Explorer", "Informed", "Friendly", "Likable", "Amiable", "Inquisitive", "Popular", "Superstar", "Admin"],
        "currenttitle": "Admin",
        "friends": [],
        "messages": [],
        "requestsent": [],
        "friendrequest": [],
        "highscore": 9999999,
        "plans": [],
        "quizzes": []

    },
    {
        username: "Ryuse",
        password: "123",
        email: "123@21",
        picture:
            "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/sword.png",
        availablepictures: [
            { src: "../images/Profile Pictures/Plant.png", desc: "Starter Badge" },
            { src: "../images/Profile Pictures/Tree.png", desc: "Get 3 titles" },
            { src: "../images/Profile Pictures/Leaf.png", desc: "Get 7 titles" }
        ],
        level: 1,
        quizdone: 3,
        quizmade: 2,
        titles: [
            "Greenhorn",
            "Curious",
            "Informed",
            "Inquisitive",
            "Explorer",
            "Friendly",
            "Admin",
            "Likable"
        ],
        currenttitle: "Admin",
        friends: ["LegoLord", "InDeCent", "Potato"],
        messages: [
            "You have gained the title Curious!",
            "You have gained the title Informed!",
            "You have gained the title Inquisitive!",
            "You have gained the title Explorer!",
            "LegoLord is now your friend",
            "You have gained the Friendly title for having 1 friend!",
            "You have gained the Leaf badge for having 7 titles!",
            "InDeCent is now your friend",
            "Potato is now your friend",
            "You have gained the Likable title for having 3 friends!",
            "You have gained the Tree badge for having 3 titles!",
            "You have gained the Tree badge for having 3 titles!"
        ],
        requestsent: [],
        badges: 0,
        friendrequest: [],
        highscore: 3520,
        plans: [
            {
                day: "1st August",
                timeStart: "12 p.m.",
                timeEnd: "6 p.m.",
                TDL: "Integrate websites",
                remark: "Be patient.",
                id: 0
            }
        ],
        quizzes: [
            {
                name: "My quiz",
                by: "Ryuse",
                img:
                    "https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
                question: ["Greetings!"],
                options: [["Hi", "Hello", "Answer2"]],
                answers: [0]
            },
            {
                name: "Try",
                by: "Ryuse",
                img:
                    "https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
                question: ["Question1", "Question2", "Question3"],
                options: [
                    ["Answer0", "Answer1", "Answer2"],
                    ["Answer0", "Answer1", "Answer2"],
                    ["Answer0", "Answer1", "Answer2"]
                ],
                answers: [0, 0, 0]
            }
        ]
    },
    {
        username: "LegoLord",
        password: "123",
        email: "123@lol",
        picture: "https://static.thenounproject.com/png/3438-200.png",
        availablepictures: [
            { src: "../images/Profile Pictures/Plant.png", desc: "Starter Badge" },
            { src: "../images/Profile Pictures/Tree.png", desc: "Get 3 titles" }
        ],
        level: 1,
        quizdone: 0,
        quizmade: 0,
        titles: ["Greenhorn", "Friendly", "Admin"],
        currenttitle: "Admin",
        friends: ["Ryuse"],
        messages: [
            "Ryuse has accepted your friend request",
            "You have gained the Friendly title for having 1 friend!",
            "You have gained the Tree badge for having 3 titles!",
            "<p id='friendrequestInDeCent'> InDeCent has sent a friend request. Accept? </p> <button class='btn btn-success' id='friendbuttonInDeCent' onclick='acceptfriend(\"InDeCent\")'>Yes</button> <button class='btn btn-success' id='friendbuttonnoInDeCent' onclick='rejectfriend(\"InDeCent\")'>No</button>",
            "<p id='friendrequestPotato'> Potato has sent a friend request. Accept? </p> <button class='btn btn-success' id='friendbuttonPotato' onclick='acceptfriend(\"Potato\")'>Yes</button> <button class='btn btn-success' id='friendbuttonnoPotato' onclick='rejectfriend(\"Potato\")'>No</button>"
        ],
        requestsent: ["Ryuse"],
        badges: 0,
        friendrequest: []
    },
    {
        username: "InDeCent",
        password: "123",
        email: "123@mail.com",
        picture:
            "https://img00.deviantart.net/f8f7/i/2018/212/2/3/darker_than_black_july_by_tf2toybonnie-dcis4op.jpg",
        availablepictures: [
            { src: "../images/Profile Pictures/Plant.png", desc: "Starter Badge" }
        ],
        level: 1,
        quizdone: 0,
        quizmade: 0,
        titles: ["Greenhorn", "Admin"],
        currenttitle: "Admin",
        friends: ["Ryuse"],
        messages: [
            "Ryuse has accepted your friend request",
            "<p id='friendrequestPotato'> Potato has sent a friend request. Accept? </p> <button class='btn btn-success' id='friendbuttonPotato' onclick='acceptfriend(\"Potato\")'>Yes</button> <button class='btn btn-success' id='friendbuttonnoPotato' onclick='rejectfriend(\"Potato\")'>No</button>"
        ],
        requestsent: ["LegoLord", "Ryuse"],
        badges: 0,
        todo: [{ date: "", time: "", do: "", remarks: "" }],
        friendrequest: []
    },
    {
        username: "Potato",
        password: "123",
        email: "123@potato",
        picture:
            "https://www.littlepotatoes.com/wp-content/uploads/2015/08/gold-2.gif",
        availablepictures: [
            { src: "../images/Profile Pictures/Plant.png", desc: "Starter Badge" },
            { src: "../images/Profile Pictures/Tree.png", desc: "Get 3 titles" }
        ],
        level: 1,
        quizdone: 0,
        quizmade: 1,
        titles: ["Greenhorn", "Admin", "Friendly"],
        currenttitle: "Admin",
        friends: ["Ryuse"],
        messages: [
            "Ryuse has accepted your friend request",
            "You have gained the Friendly title for having 1 friend!",
            "You have gained the Tree badge for having 3 titles!"
        ],
        requestsent: ["Ryuse", "InDeCent", "LegoLord"],
        badges: 0,
        todo: [{ date: "", time: "", do: "", remarks: "" }],
        highscore: 2320,
        plans: [
            {
                day: "Everyday",
                timeStart: "Morning",
                timeEnd: "Midnight",
                TDL: "Sleep",
                remark: "On a couch",
                id: 0
            }
        ],
        quizzes: [
            {
                name: "Potato Facts",
                by: "Potato",
                img:
                    "https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
                question: [
                    "Is potato a vegetable?",
                    "Which country is the leading producer of potatoes?",
                    "What are potatoes called sometimes?"
                ],
                options: [
                    ["Yes", "No", "I don't know"],
                    ["Ireland", "Africa", "China"],
                    ["Spuds", "Roots", "Brown Tomato"]
                ],
                answers: [0, 2, 0]
            }
        ]
    },
    {
        username: "John",
        password: "123",
        email: "123@mail.comlol",
        picture: "../images/Profile Pictures/Plant.png",
        availablepictures: [
            { src: "../images/Profile Pictures/Plant.png", desc: "Starter Badge" }
        ],
        level: 1,
        quizdone: 0,
        quizmade: 0,
        titles: ["Greenhorn", "Informed"],
        currenttitle: "Greenhorn",
        friends: [],
        messages: ["You have gained the title Informed!"],
        requestsent: [],
        badges: 0,
        todo: [{ date: "", time: "", do: "", remarks: "" }],
        plans: [
            {
                day: "Today",
                timeStart: "9",
                timeEnd: "10",
                TDL: "Sleep",
                remark: "With a pillow",
                id: 0
            }
        ]
    }]
    //==============================================================================================//
    quizzes = [
        {
            name: "My quiz",
            by: "Ryuse",
            img:
                "https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
            question: ["Greetings!"],
            options: [["Hi", "Hello", "Answer2"]],
            answers: [0]
        },
        {
            name: "Try",
            by: "Ryuse",
            img:
                "https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
            question: ["Question1", "Question2", "Question3"],
            options: [
                ["Answer0", "Answer1", "Answer2"],
                ["Answer0", "Answer1", "Answer2"],
                ["Answer0", "Answer1", "Answer2"]
            ],
            answers: [0, 0, 0]
        },
        {
            name: "Potato Facts",
            by: "Potato",
            img:
                "https://imageog.flaticon.com/icons/png/512/44/44386.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
            question: [
                "Is potato a vegetable?",
                "Which country is the leading producer of potatoes?",
                "What are potatoes called sometimes?"
            ],
            options: [
                ["Yes", "No", "I don't know"],
                ["Ireland", "Africa", "China"],
                ["Spuds", "Roots", "Brown Tomato"]
            ],
            answers: [0, 2, 0]
        }]
    //==========================================================================================================================//
    highscores = [
        { name: "Ryuse", score: 3520 },
        { name: "Potato", score: 2320 },
        { name: "Ryuse", score: 2046 },
        { name: "Ryuse", score: 1870 },
        { name: "Potato", score: 1444 },
        { name: "Ryuse", score: 1420 },
        { name: "Ryuse", score: 1270 },
        { name: "Potato", score: 1120 },
        { name: "Potato", score: 1120 },
        { name: "Ryuse", score: 971 },
        { name: "Potato", score: 971 }
    ];
    localStorage.setItem("highscores", JSON.stringify(highscores));
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

