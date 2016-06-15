applyClass = function(opts) {
  var options = opts || {};
    options.items         = typeof opts.items !== "undefined" ? opts.items : $(".fa"),
    options.delay         = typeof opts.delay !== "undefined" ? opts.delay : 100,
    options.classtoapply  = typeof opts.classtoapply !== "undefined" ? opts.classtoapply : "in";

  var applyIt = function(index) {
    options.items.eq(index).addClass(options.classtoapply);//Bootstrap's fade in style
    if (index<options.items.length){
      setTimeout(function() {applyIt(index+1);},options.delay);
    }
  };

    //start the timer/loop;
    applyIt(0);
};
$(document).on("ready",applyClass);
