var incre = document.querySelector("#increment");
var decre = document.querySelector("#decrement");
var countNum = document.querySelector("#count");
var i = 0;

incre.addEventListener("click", function() {
    i++;
    countNum.innerHTML = i
});

decre.addEventListener("click", function() {
    i--;
    countNum.innerHTML = i
});