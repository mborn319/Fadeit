fadeIcons = function() {
  var allIcons = $(".fa"),
      delay = 100;

  var fadeIt = function(index) {
      allIcons.eq(index).addClass("in");//Bootstrap's fade in style
      if (index<allIcons.length){
        setTimeout(function() {fadeIt(index+1);},delay);
      }
    };

    //start the timer/loop;
    fadeIt(0);
};  
$(document).on("ready",fadeIcons);
