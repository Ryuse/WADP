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
                options.id = "option" + clicks+i;                               
            }
        }
    }
    var submit = document.createElement("input");
    setAttributes(submit, { "class": "submit", "type": "submit", "onclick": "storequiz()", "value": "Submit" });
    parent2.appendChild(submit);
};
//Checks if user has filled up required field before proceeding to execute clickcounter()
function checkval() {
    var questions = document.getElementById("qnnum").value;
    if (questions == "") {
        alert("Please fill up the field with the desired number of questions");
    }
    else {
        clickcounter();
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
    var storequiz = [
        {

        }
    ]
    var qnamnt = document.getElementById("qnnum").value;
}
function store(mylink) {
    var option = mylink.innerText;
    document.getElementsByClassName("questions").value = option;
};