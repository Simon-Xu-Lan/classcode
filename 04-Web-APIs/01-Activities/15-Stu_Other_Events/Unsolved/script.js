var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");



function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

function keyEvent(event) {
  document.getElementById("key").textContent = event.key;
  document.getElementById("code").textContent = event.keyCode;
}

function keyDown(event) {
  document.getElementById("status").textContent = "key down";
}

function keyUp(event) {
  document.getElementById("status").textContent = "key up";
}

// The select element should trigger the toggleDisplay function in script.js.
eventType.addEventListener("change", toggleDisplay);

// If key is selected, the event's code, key, and status (keydown or 
// keyup) should be displayed in the #key-events div when the user 
// presses a key anywhere on the document.
document.addEventListener("keypress", keyEvent);
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup",keyUp);

// If click is selected, the text content of the event's target, 
// and the cursor's x and y coordinates should be displayed in the 
// #click-events div when the user clicks the anywhere on document.
document.addEventListener("click", function(event) {
  point = event.target;
  document.getElementById("target").textContent = point.textContent;
  document.getElementById("x").innerHTML = event.clientX;
  document.getElementById("y").innerHTML = event.clientY;
})