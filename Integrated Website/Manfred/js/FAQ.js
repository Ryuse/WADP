function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction4() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction5() {
    var x = document.getElementById("myDIV5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction6() {
    var x = document.getElementById("myDIV6");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction7() {
    var x = document.getElementById("myDIV7");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction8() {
    var x = document.getElementById("myDIV8");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction9() {
    var x = document.getElementById("myDIV9");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction10() {
    var x = document.getElementById("myDIV10");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function confirm1(textbox) {
    var x = document.getElementById("textbox").value;
    if (!x.match(/\S/)) {
        alert("Please enter a question before submitting.");
        return false;
    } else {
        var y = confirm("Are you sure you want to submit?");
	    if (y == true) {
	        alert("You have successfully submitted your enquiry! Thank you!");
	    }
	    else {
	        alert("Okay, take your time.");
        }
        return true;
    }
}
