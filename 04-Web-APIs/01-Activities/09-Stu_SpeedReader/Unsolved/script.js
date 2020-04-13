var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");

var timeEl = document.createElement("h1");
var mainEl = document.createElement("h2");
var secondsLeft = 5;

// timeEl.textContent = "seconds left";
// document.body.appendChild(timeEl);

// cument.body.appendChild(timeEl);
// document.body.appendChild(mainEl);


function prepareRead() {
  // Create the countdown timer.
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";
    document.body.appendChild(timeEl);
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      speedRead();
    }

  }, 1000);
}



function speedRead() {
  // Print words to the screen one at a time.
  for (var i=0; i<words.length; i++) {
    mainEl.textContent = word[i];
    document.body.appendChild(mainEl);
  }

}
