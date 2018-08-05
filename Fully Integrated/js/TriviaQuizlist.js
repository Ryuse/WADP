function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

//when user click a quiz the playcount will increase by 1


function playcount(){
  var playcount = 0;
  playcount+=1;
  document.querySelector(".playcount").innerHTML = playcount;
}