// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

(function(window){
       var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

      for (var i = 0; i < names.length; i++) {

        var firstLetter = names[i].charAt(0);
        firstLetter.toLowerCase();

        if (firstLetter == 'J') {
      
          byeSpeaker.speak(names[i]);
        } else {

          helloSpeaker.speak(names[i]);
        }
      }

})(window);
