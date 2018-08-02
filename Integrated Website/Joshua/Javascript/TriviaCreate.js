function dropdown() {
    document.getElementById("questions").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}



//Creates correct amount of inputs for user to enter questions and options
function clickcounter() {
    var parent2 = document.getElementById("newquiz");
    while (parent2.firstChild) {
        parent2.removeChild(parent2.firstChild);
    }
    var questions = document.getElementById("qnnum").value;
    var clicks = 0;
    for (clicks = 0; clicks < questions; clicks++) {
        if (clicks <= 10) {
            var createtext = document.createElement("p");
            var create = document.createElement("input");
            createtext.innerText = `Question ${clicks + 1}:`;
            setAttributes(create, { "class": "form-control input-md questions", "type": "text", "name": "question", "placeholder": "Type your question here..." });
            parent2.appendChild(createtext);
            parent2.appendChild(create);
            create.id = "question" + clicks;
            for (i = 0; i < 4; i++) {

                var radio = document.createElement("input");
                var options = document.createElement("input");

                setAttributes(radio, { "class": "form-control pull-left radio", "type": "radio", "name": "options", "style": "width: 1.2em; height: 1.2em;" });
                setAttributes(options, { "class": "form-control input-md options", "type": "text", "name": "setoption", "placeholder": "Type your options here..." });

                parent2.appendChild(radio);
                parent2.appendChild(options);
                options.id = "option" + clicks + i;
            }
        }
    }
    var submit = document.createElement("input");
    setAttributes(submit, { "class": "submit", "type": "submit", "onclick": "storequiz()", "value": "Submit" });
    parent2.appendChild(submit);
};



//Checks if user has filled up required field before proceeding to execute clickcounter() //Works
function checkval() {
    var questions = document.getElementById("qnnum").value;
    var quizname = document.getElementById("quizname").value;
    var imglink = document.getElementById("getimg").value;
    if (questions == ""&&quizname == ""&&imglink == "") {
        alert("Please fill up the field(s) with the required information.");
    }
    else {
        clickcounter();
    }
}




function checkradio() {
    for (i = 0; i < document.getElementById("qnnum").value; i++) {

        for (q = 0; q < 4; q++) {

            bull = []
            if (document.querySelectorAll("input.radio")[q].checked == false) {
                bull.push(false);
            }
            else {
                bull.push(true)
            }

        }

        if (bull.indexOf(true) != -1) {
            return true
        }

    }

}


//Resets everything in the create quiz
function resetchild() {
    var parent = document.getElementById("newquiz");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    document.getElementById("creating").reset();
}
function storequiz() {
    if (checkradio() == false) {

        alert("Please indicate the correct answer by selecting the corresponding radio button.");
    }

    else {
        console.log("It WORKS")
        var storeall = [];
        var questions = {};
        for (i = 0; i < document.getElementById("qnnum").value; i++) {
            for (q = 0; q < 4; q++) {
                var question = document.getElementById("question" + i).value;
                questions.question = question;
                var answers = {
                    option1: "",
                    option2: "",
                    option3: "",
                    option4: "",
                }
                console.log(answers)
                var stuff = "option" + (q+1)
                console.log(stuff)
                //Still cannot figure out how to do this
                //Save all questions, options and set options into localstorage
                answers.stuff = document.getElementById("options"+i+q).value
                console.log(answers.option[q])
            }
        }
        
        storeall.push(answers);
        localStorage.setItem("quiz", JSON.stringify(storeall));
    }
}
//supposed to put selected dropdown content into input field
function store(mylink) {
    var option = mylink.innerText;
    document.getElementsByClassName("questions").value = option;
};

// for(i = 0; i < 5; i++){
//     questionsss = "num" + i
//     console.log(questionsss)
// }