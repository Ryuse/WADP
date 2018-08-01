function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
function openNew(){
    var newwindow = window.open("");
    newwindow.document.write("")
}