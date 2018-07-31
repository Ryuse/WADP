var i;
//Daily Trivia
var daily = ["In 1975, the National Academy of Sciences estimated that ocean-based sources, such as cargo ships and cruise liners had dumped 14 billion pounds of garbage into the ocean."
  , "Over 1 million seabirds and 100,000 sea mammals are killed by pollution every year."
  , "People who live in places with high levels of air pollutants have a 20% higher risk of death from lung cancer than people who live in less-polluted areas."
  , "Pollution is one of the biggest global killers, affecting over 100 million people. That’s comparable to global diseases like malaria and HIV."
  , "The Mississippi River carries an estimated 1.5 million metric tons of nitrogen pollution into the Gulf of Mexico each year, creating a “dead zone” in the Gulf each summer about the size of New Jersey."
  , "Approximately 40% of the lakes in America are too polluted for fishing, aquatic life, or swimming."
  , "Recycling and composting prevented 85 million tons of material away from being disposed of in 2010, up from 18 million tons in 1980."];
var date = new Date();
var day = date.getDay();
if (day == 0) {
  document.getElementById("daily").innerHTML = daily[0];
}
else if (day == 1) {
  document.getElementById("daily").innerHTML = daily[1];
}
else if (day == 2) {
  document.getElementById("daily").innerHTML = daily[2];
}
else if (day == 3) {
  document.getElementById("daily").innerHTML = daily[3];
}
else if (day == 4) {
  document.getElementById("daily").innerHTML = daily[4];
}
else if (day == 5) {
  document.getElementById("daily").innerHTML = daily[5];
}
else if (day == 6) {
  document.getElementById("daily").innerHTML = daily[6];
}
//Create quiz functions
function create() {
  var quizdisplay = document.getElementById("quizdisplay");
  document.getElementById("quizlist") = document.getElementById("quizlist") + "<div class='quizholders'></div>";
  // document.getElementById("quizlist").appendChild("quizdisplay");
}
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

function creating() {
  var parent = document.getElementById("creating");
  var create = document.createElement("input");
  setAttributes(create, { "class": "form-control input-md questions", "type": "text", "name": "question", "placeholder": "Type your question here..." });
  parent.appendChild(create);
};

function setoption() {
  for (i = 0; i < 4; i++) {
    var parent = document.getElementById("creating");
    var radio = document.createElement("input");
    setAttributes(radio, { "class": "form-control pull-left", "type": "radio", "name": "options", "style": "width: 1.2em; height: 1.2em;" });
    parent.appendChild(radio);
    var create = document.createElement("input");
    setAttributes(create, { "class": "form-control input-md options", "type": "text", "name": "setoption", "placeholder":"Type your options here..."});
    parent.appendChild(create);
  }
};
function clickcounter() {
  var questions = document.getElementById("qnnum").value;
  var clicks = 0;
  for (clicks = 0; clicks < questions; clicks++) {
    if (clicks<=20) {
      var create = document.createElement("p");
      create.innerText = `Question ${clicks+1}:`;
      document.getElementById("creating").appendChild(create);
      creating();
      setoption();
    }
  }
};
localStorage.setItem("questions",document.getElementsByClassName("questions").value);
localStorage.setItem("options",document.getElementsByClassName("options").value);
// function start() {
//   document.getElementById("creating").reset();
// };
function store(mylink) {
  var option = mylink.innerText;
  document.getElementById("quest1").value = option;
};