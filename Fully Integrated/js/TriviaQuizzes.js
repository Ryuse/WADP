var answers = ["op1","op4","op3","op1","op1"], 
    correct = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  for (var i=0; i<correct; i++)
    if(getCheckedValue("quest"+i)===answers[i]) score += 1; // increment only
  return score;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ correct+", keep it up!");
}
var answers2 = ["op1","op3","op4","op2","op1"], 
    correct2 = answers2.length;

function getScore2(){
  var score = 0;
  for (var i=0; i<correct2; i++)
    if(getCheckedValue("quest"+i)===answers2[i]) score += 1; // increment only
  return score;
}

function returnScore2(){
  alert("Your score is "+ getScore2() +"/"+ correct2+", keep it up!");
}
var answers3 = ["op4","op1","op2","op1","op4"], 
    correct3 = answers3.length;

function getScore3(){
  var score = 0;
  for (var i=0; i<correct3; i++)
    if(getCheckedValue("quest"+i)===answers3[i]) score += 1; // increment only
  return score;
}

function returnScore3(){
  alert("Your score is "+ getScore3() +"/"+ correct3+", keep it up!");
}
var answers4 = ["op2","op1","op4","op3","op1"], 
    correct4 = answers4.length;

function getScore4(){
  var score = 0;
  for (var i=0; i<correct4; i++)
    if(getCheckedValue("quest"+i)===answers4[i]) score += 1; // increment only
  return score;
}

function returnScore4(){
  alert("Your score is "+ getScore4() +"/"+ correct4+", keep it up!");
}
var answers5 = ["op4","op1","op1","op4","op1"], 
    correct5 = answers5.length;

function getScore5(){
  var score = 0;
  for (var i=0; i<correct5; i++)
    if(getCheckedValue("quest"+i)===answers5[i]) score += 1; // increment only
  return score;
}

function returnScore5(){
  alert("Your score is "+ getScore5() +"/"+ correct5+", keep it up!");
}
var answers6 = ["op4","op2","op3","op4","op2"], 
    correct6 = answers6.length;

function getScore6(){
  var score = 0;
  for (var i=0; i<correct6; i++)
    if(getCheckedValue("quest"+i)===answers6[i]) score += 1; // increment only
  return score;
}

function returnScore6(){
  alert("Your score is "+ getScore6() +"/"+ correct6+", keep it up!");
}