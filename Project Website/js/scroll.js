// const slider = document.querySelector('#slider')
// let isDown = false; //flag variable for clicking
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return; //stops the function from running
//     event.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 3;
//     slider.scrollLeft = scrollLeft - walk;
// });
var slider = document.getElementById("slider");
var rightbutton = document.getElementById("right");
var leftbutton = document.getElementById("left");
var right = [0, -100, -200, -300, -400, -500];
var i = 0;
var plus = 0;
function goright(){
    i += 1;
    
    // var id = setInterval(frame(), 10);

    // function frame(){
    //     if (plus !== right[i+1]) {
    //         clearInterval(id)
    //     }
    //     else{
    //         plus -= 10;
    //         slider.style.marginLeft += plus + '%';
    //     }
    // }

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
