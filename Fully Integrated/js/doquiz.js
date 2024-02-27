var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}

quizzes = JSON.parse(localStorage.getItem("quizzes"));
quizchosen = JSON.parse(localStorage.getItem("quizchosen"));

quiztitle = document.getElementById("quiztitle")
quiztitle.innerHTML = quizzes[quizchosen].name

quizimg = document.getElementById("quizimg")
quizimg.src = quizzes[quizchosen].img

container = document.getElementById("quizcontainer")

for (q = 0; q < quizzes[quizchosen].question.length; q++) {
    div = document.createElement("div")
    div.id = "question"
    div.className = "col-10"

    question = document.createElement("h3")
    question.innerHTML = quizzes[quizchosen].question[q]
    question.className = "text-center"


    div.appendChild(question)

    for (a = 0; a < 3; a++) {

        ansdiv = document.createElement("div")
        ansdiv.className = "col-3 row justify-content-start"

        input = document.createElement("input")
        input.id = "answer" + q + a
        input.type = "radio"
        input.setAttribute("name", "group" + q)

        label = document.createElement("LABEL");
        label.innerHTML = quizzes[quizchosen].options[q][a]
        label.setAttribute("for", input.id)


        ansdiv.appendChild(input)
        ansdiv.appendChild(label)
        div.appendChild(ansdiv)
    }


    container.appendChild(div)
}

function findchecked() {
    useranswers = []
    for (c = 0; c < quizzes[quizchosen].question.length; c++) {
        for (a = 0; a < 3; a++) {
            if (document.getElementById("answer" + c + a).checked == true) {
                useranswers.push(a)
            }
        }
    }

    return useranswers
}

function submitquiz() {
    score = 0;

    useranswers = findchecked()
    console.log(useranswers)
    for (c = 0; c < quizzes[quizchosen].question.length; c++) {
        if (useranswers[c] == quizzes[quizchosen].answers[c]) {
            score++
        }
    }

    if (score == quizzes[quizchosen].question.length) {

        users[account()].quizdone++
        localStorage.setItem("users", JSON.stringify(users));
        tryagain = confirm("You scored a perfect score! Try again?")
        if(tryagain){
            location.reload()
        }
        else{
            window.location.href = "index.html"
        }
    }

    else {
        tryagain = confirm(`You scored ${score}/${quizzes[quizchosen].question.length}. You need a perfect score to add one to your quiz done. Try again?`)
        if(tryagain){
            location.reload()
        }
        else{
            window.location.href = "index.html"
        }
    }

}