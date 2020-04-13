// people list variable
var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");

// add person variable
var nameEl = document.querySelector("#name");

// modal variable
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

// global variable
var people = [{ name: "Bob" }];
var currentId = 0;

// add person to people list
function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

// close modal window
function close() {
  modalEl.style.display = "none";
}

// edit the modal
function handleClick() {
  // Use event delegation to handle when the user clicks "edit"
  event.preventDefault();
  #0.modal();
}

// main program section
closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);

$("#0").modal();




// When the Add Person button is clicked, the person should be added to both the people array and the list elements.
addBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    var item = document.createElement("li");
    item.textContent = groceries[event.target.parentElement.id];
    people.append(item);
  }
});

If edit is clicked, event delegation should be used to handle the click event.

When the user clicks on edit, the modal should appear with the modal header property already populated with the person's name. If a description exists, the textarea should be populated with the person's description. If not, the description should be left blank.

When the save button is clicked, the description of the current person should be updated in the people array.

Bonus: Use event delegation to make the modal close if the user clicks away from the modal.