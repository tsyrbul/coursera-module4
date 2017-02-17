(function(window){
  var speakWord = "Good Bye";
  var byeSpeaker = {
    speak: function (name) {
        console.log(speakWord + " " + name);
    }
  };
  window.goodbye = byeSpeaker;
})(window);
