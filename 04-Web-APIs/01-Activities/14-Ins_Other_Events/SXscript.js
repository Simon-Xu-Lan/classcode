// 1. get the element of Select, input textarea, clear
var fontEl = document.querySelector("#typeface");
var inputEl = document.querySelector("#textarea");
var clearEl = document.querySelector("#clear");
var textEl = document.querySelector(".elements");
var h1El = document.querySelector("#h1");
var h2El = document.querySelector("#h2");
var h3El = document.querySelector("#h3");
var pEl = document.querySelector("#p")

// 2. change the text font style according to choice
function changeFont() {
    textEl.style.fontFamily = fontEl.value;
}

fontEl.addEventListener("change", changeFont);

// 3. the text content according to the input

function changeText () {
    h1El.textContent += inputEl.value;
    h2El.textContent += inputEl.value;
    h3El.textContent += inputEl.value;
    pEl.textContent += inputEl.value;
}

inputEl.addEventListener("keydown", changeText);


clearEl.addEventListener("click", function(event) {
    event.preventDefault();

    h1El.textContent = "";
    h2El.textContent = "";
    h3El.textContent = "";
    pEl.textContent = "";
});
