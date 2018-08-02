function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
function openNew(){
    var newwindow = window.open("");
    newwindow.document.write("")
}
var playcount = 0;
function playcount(){
  playcount+=1;
  document.querySelector(".playcount");
}