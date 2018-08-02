$(window).load(function(){
    $(window).scroll(function() {
      var wintop = $(window).scrollTop(), docheight = $('article').height(), winheight = $(window).height();
      console.log(wintop);
      var totalScroll = (wintop/(docheight-winheight))*100;
      console.log("total scroll" + totalScroll);
      $(".progress-bar").css("width",totalScroll+"%");
    });
  
  });
  score=0;
  wrong=0;
var submit = function(){
    var comp = localStorage.getItem("quiz",JSON.parse(storeall));
}
var compare = function(){
    if(comp){

    }
}