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
  //Create input textfield
  function creating() {
    var parent = document.getElementById("newquiz");
    var create = document.createElement("input");
    setAttributes(create, { "class": "form-control input-md questions", "type": "text", "name": "question", "placeholder": "Type your question here..." });
    parent.appendChild(create);
  };
  //Create 4 Radio buttons and textfields for user to set options
  function setoption() {
    for (i = 0; i < 4; i++) {
      var parent = document.getElementById("newquiz");
      var radio = document.createElement("input");
      setAttributes(radio, { "class": "form-control pull-left radio", "type": "radio", "name": "options", "style": "width: 1.2em; height: 1.2em;" });
      parent.appendChild(radio);
      var create = document.createElement("input");
      setAttributes(create, { "class": "form-control input-md options", "type": "text", "name": "setoption", "placeholder":"Type your options here..."});
      parent.appendChild(create);
    }
  };
  //Creates correct amount of inputs for user to enter questions and options
  function clickcounter() {
    var parent2 = document.getElementById("newquiz");
    while (parent2.firstChild) {
        parent2.removeChild(parent2.firstChild);
    }
    var questions = document.getElementById("qnnum").value;
    var clicks = 0;
    for (clicks = 0; clicks < questions; clicks++) {
      if (clicks<=10) {
        var createtext = document.createElement("p");
        createtext.innerText = `Question ${clicks+1}:`;
        parent2.appendChild(createtext);
        creating();
        setoption();
      }
    }
  };
  //Checks if user has filled up required field before proceeding to execute clickcounter()
  function checkval(){
    var questions = document.getElementById("qnnum").value;
    if (questions == ""){
        alert("Please fill up the field with the desired number of questions");
    }
    else{
        clickcounter();
    }
  }
  function store(mylink) {
    var option = mylink.innerText;
    document.getElementById("quest1").value = option;
  };