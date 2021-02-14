(function (console) {
  var names = ["Deniz", "Devin", "Jeena", "Jason", "Josh", "Franklin", "Michael", "Ron", "Lewis", "Jora", "Daniel", "Lisa", "Jakze"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(console);

