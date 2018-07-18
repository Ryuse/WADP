
var slider = document.getElementById("slider");
var rightbutton = document.getElementById("right");
var leftbutton = document.getElementById("left");
var right = [0, -100, -200, -300, -400, -500];
var i = 0;
var plus = 0;
function goright(){
    i += 1;
    

    slider.style.marginLeft = right[i] + '%';
    

    

    if (i == right.length - 1 || slider.style.marginLeft == "-500%"){
        rightbutton.style.display = "none";
    }
    else{
        rightbutton.style.display = "block";
    }
    if (i !== 0){
        leftbutton.style.display = "block";
    }
}

function goleft(){
    
    i += -1;
    
    slider.style.marginLeft = right[i] + '%';
    if (i !== right.length - 1){
        rightbutton.style.display = "block";
    }
    if (i == 0){
        leftbutton.style.display = "none";
    }
    else{
        leftbutton.style.display = "block";
    }
}
