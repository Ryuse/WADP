var i;
//Daily Trivia
var daily=["In 1975, the National Academy of Sciences estimated that ocean-based sources, such as cargo ships and cruise liners had dumped 14 billion pounds of garbage into the ocean.","Over 1 million seabirds and 100,000 sea mammals are killed by pollution every year.","People who live in places with high levels of air pollutants have a 20% higher risk of death from lung cancer than people who live in less-polluted areas."];
var date=new Date();
var day=date.getDay();
for (i=-1; i<day;i++){
  if(i=1,i=4,i=0){
      document.getElementById("daily").innerText=daily[0];
  }
  if (i=2,i=5){
      document.getElementById("daily").innerText=daily[1];
  }
  if (i=3,i=6){
    document.getElementById("daily").innerText=daily[2];
  }
}
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
  function creating(){
      var questions=document.getElementById("qnnum").value;
      for (var i=0; i<questions;i++){

      }
  }
  function start(){
    document.getElementById("creating").reset();
  }
  function store(mylink){
      var option=mylink.innerText;
      document.getElementById("qn1").value=option;
  }