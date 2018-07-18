//When the website loads, the loading screen is removed

window.addEventListener("load", function(){
    document.getElementById("overlay").style.display = "none";
});

//Animation goes up(Not really needed now since I just linked it to another page)

// function goUp(){
//     var column = document.getElementById("column");
//     var content = document.getElementById("content");
//     var welcome = document.getElementById("welcometext");
//     var welcome2 = document.getElementById("welcome2");
//     var welcome3 = document.getElementById("welcome3");
//     var welcome4 = document.getElementById("welcome4");
//     var slider = document.getElementById("slider");
//     var welcomecontainer = document.getElementById("welcome");
//     var rightbutton = document.getElementById("right");
//     var leftbutton = document.getElementById("left");
//     var main = document.getElementById("main");

//     //Positions variables
//     var pos = 270;
//     var id = setInterval(frame, 5);

//     var minus = 1;
//     var minus2 = 1;

//     var plus = 0;
//     content.style.opacity = 0;

//     function frame(){
//         if (pos == -200 || plus == 1){
//             clearInterval(id);

//             welcome.style.display = "none";
//             welcome2.style.display = "none";
//             welcome3.style.display = "none";
//             welcome4.style.display = "none";
//             rightbutton.style.display = "none";
//             leftbutton.style.display = "none";

//             welcomecontainer.style.backgroundImage = "url('../images/white.png')";
//             slider.style.display ="none";


//             var id2 = setInterval(frame2, 5);
            
//             function frame2(){
//                 if (plus == 1){
//                     clearInterval(id2);
//                     // welcomecontainer.style.display="none";
//                 }
//                 else{
//                     // minus2 += -0.05;
//                     // welcomecontainer.style.opacity = minus2;
//                     plus += 0.05;
//                     content.style.opacity = 0 + plus;
//                     content.style.display = "inline-block";
//                     // column.style.opacity = 0 + plus;
//                     // column.style.display = "inline-block";
                    
//                     main.style.display = "inline-block";
//                 }
//             }
            
            
//         }
//         else{
//             pos += -5;
//             minus += -.02;
//             welcome.style.top = pos + 'px';
//             welcome.style.opacity = minus;
            
            
//             welcome2.style.opacity = minus;

//             welcome3.style.top = pos + 'px';
//             welcome3.style.opacity = minus;

//             welcome4.style.opacity = minus;

//             rightbutton.style.opacity = minus;
//             leftbutton.style.opacity = minus;
//         }
//     }
    
// }

