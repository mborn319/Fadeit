applyClass = function(opts) {
  var opts = {},
    opts.items = opts.items || $(".fa"),
    opts.delay = opts.delay || 100,
    opts.classtoapply = opts.classtoapply || "in";

  var applyIt = function(index) {
    opts.items.eq(index).addClass(opts.classtoapply);//Bootstrap's fade in style
    if (index<opts.items.length){
      setTimeout(function() {applyIt(index+1);},delay);
    }
  };

    //start the timer/loop;
    applyIt(0);
};  
$(document).on("ready",applyClass);
