
var daily=[""]
//Create quiz functions
function create(){
    var quizdisplay=document.getElementById("quizdisplay");
    document.getElementById("quizlist")=document.getElementById("quizlist")+"<div class='quizholders'></div>";
    // document.getElementById("quizlist").appendChild("quizdisplay");
}
function dropdown() {
    document.getElementById("questions").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
      var dropdowns = document.getElementsByClassName("list-group-item");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function start(){
      var questions=document.getElementById("qnnum").value;

  }