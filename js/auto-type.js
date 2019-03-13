var randomizer = Math.floor((Math.random() * 6) + 1);

var txtSelector = ".title" + randomizer;


function autoType(elementClass, typingSpeed){

    var element = $(elementClass);

    element.css({
      "display": "block",
      "position": "absolute"
    });

    element.prepend('<div class="cursor" style="right: initial; left:0;"></div>');

    element = element.find(".text-js");

    var text = element.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";

    element.text("|");

    setTimeout(function(){

      element.css("opacity",1);
      element.prev().removeAttr("style");
      element.text("");
      
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            newString += char;
            element.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },700);
  }
  
$(document).ready(function(){
  autoType(txtSelector,100);
});



