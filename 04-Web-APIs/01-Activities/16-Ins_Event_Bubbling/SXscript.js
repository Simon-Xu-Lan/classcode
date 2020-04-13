var outerDivEl = document.querySelector(".outer-div");
var innerDivEl = document.querySelector(".inner-div");
var buttonEl = document.querySelector(".button");

outerDivEl.addEventListener("click", function(event) {
    event.preventDefault();
    outerDivEl.setAttribute( 
        "style",
        "background-color: orange"
    )
})

innerDivEl.addEventListener("click", function(event) {
    event.preventDefault();
    innerDivEl.setAttribute(
        "style",
        "background-color: purple"
    )
})

buttonEl.addEventListener("click", function(event) {
    event.preventDefault();
    buttonEl.setAttribute(
        "style",
        "background-color: blue"
    )
})