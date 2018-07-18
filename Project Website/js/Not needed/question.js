var questions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4"
]

var answers =[
    "Answer 1",
    "Answer 2",
    "Answer 3",
    "Answer 4"
]

function answer(n){
    document.getElementById("question" + [n+1]).innerHTML = "Answer: " + answers[n];
    document.getElementsByClassName("pointer")[n].style.display = "none";
    document.getElementsByClassName("back")[n].style.display = "block";


}

function question(n){
    document.getElementById("question" + [n+1]).innerHTML = "Question: " + questions[n];
    document.getElementsByClassName("pointer")[n].style.display = "block";
    document.getElementsByClassName("back")[n].style.display = "none";
}