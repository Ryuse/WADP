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
  alert("Your score is "+ getScore() +"/"+ correct+", keep trying!");
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
  alert("Your score is "+ getScore2() +"/"+ correct2+", keep trying!");
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
  alert("Your score is "+ getScore2() +"/"+ correct3+", keep trying!");
}