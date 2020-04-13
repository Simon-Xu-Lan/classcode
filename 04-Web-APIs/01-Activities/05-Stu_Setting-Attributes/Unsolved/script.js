// * Give a `src` and `alt` attribute to the 3 provided `img` tags.
// document.getElementsByClassName("sites")[0].children[0].lastElementChild.firstElementChild.src = "images/image_1.jpg"
var sitesEl = document.getElementsByClassName("sites");
for (var i = 0; i < sitesEl.length; i++) {
    var j = i + 1;
    var fileName = "images/image_" + j + ".jeg"
    sitesEl[i].children[0].lastElementChild.firstElementChild.src = "fileName";
}

//   * Give a `href` attribute to the 3 provided `a` tags.`

//   * Add styles via `setAttribute` to make the page look decent. Recommended: margins and padding.

// ## Hint 

// * You may need a for loop!

// ## Bonus
 
// * Randomly set the `href` for site 1 from an array of sites you create.
