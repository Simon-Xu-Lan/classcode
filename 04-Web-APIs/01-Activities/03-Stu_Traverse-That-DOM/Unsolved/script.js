document.getElementById("articles").style.fontSize = "200px";
document.getElementById("articles").children[0].style.fontSize = "100px"
document.getElementById("articles").children[0].children[1].style.fontSize = "20px"

// Change its first childs, last child to have a font color of blue.
// why this first JS get error? second one works?
// document.getElementById("articles").childNodes[0].style.color = "blue";
// document.getElementById("articles").childNodes[1].style.color = "blue";
// document.getElementById("articles").children[0].style.color = "blue";

document.getElementById("articles").lastElementChild.style.color= "red";

// Change its previous sibling to have a background color of black.
document.getElementById("articles").previousElementSibling.style.backgroundColor = "black";

// document.getElementById("articles").children[0].style.color = "blue";


// document.getElementById("main")[1].style.textDecoration = "underlined";
// document.getElementById("main")[1].style.fontSize = "50px";
// document.getElementById("main")[0].style.color = "orange";
// document.getElementById("main").style.color = "underlined";

// Target the div with the ID of articles.

// Change its font size to 50px.

// Change its first childs, last child to have a font color of blue.

// Change its previous sibling to have a background color of black.

// Target the div with the ID of main.

// Change its second child node so the text is underlined.
document.getElementById("main").childNodes[1].style.textDecoration = "underline";

// Change its last child element to have a font size of 50px.
document.getElementById("main").lastElementChild.style.color = "orange";
// Change its first child element to have a font color of orange.
document.getElementById("main").firstElementChild.style.color = "orange";
// Change its last child elements parent to have a font size of 40px.
document.getElementById("main").lastElementChild.parentElement.style.fontSize = "100px";