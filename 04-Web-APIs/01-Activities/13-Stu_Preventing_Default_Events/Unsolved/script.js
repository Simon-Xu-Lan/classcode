var formEl = document.querySelector("#form");
var submitEl = document.querySelector("#submit");
var totalEl = document.createElement("INPUT");
var tipEl =  document.createElement("INPUT");
var label1El = document.createElement("LABEL");
var label2El = document.createElement("LABEL");

var tipAmtEl = document.querySelector("#tip-amount");
var newTotalEl = document.querySelector("#new-total");


// var labelEl1 = .creatElement("LABEL")

formEl.insertBefore(tipEl, formEl.childNodes[0]);
formEl.insertBefore(label2El, formEl.childNodes[0]);
formEl.insertBefore(totalEl, formEl.childNodes[0]);
formEl.insertBefore(label1El, formEl.childNodes[0]);

label2El.textContent = "Tip percentage:"
label1El.textContent = "Total price of the meal:"

var totalAmt
submitEl.addEventListener("click", function(event) {
    event.preventDefault();

    var tip = parseFloat(totalEl.value) * 
    parseFloat(tipEl.value) / 100.0;
    totalAmt = parseFloat(totalEl.value) + tip;

    tipAmtEl.textContent = "$" + tip;
    newTotalEl.textContent = "$" + totalAmt;
});

var containerEl = document.querySelector(".container");
var splitFormEl = document.createElement("FORM");
var splitInputEl = document.createElement("INPUT");
var splitLabelEl = document.createElement("LABEL");
var splitButtonEl = document.createElement("BUTTON");
var h4El = document.createElement("H4");
var h2El = document.createElement("H2");


containerEl.appendChild(splitFormEl);
splitFormEl.appendChild(splitLabelEl);
splitFormEl.appendChild(splitInputEl);
splitFormEl.appendChild(splitButtonEl);

containerEl.appendChild(h4El);
containerEl.appendChild(h2El);

splitLabelEl.textContent = "How many people to split the bill?";
splitButtonEl.textContent = "Split the bill"

splitButtonEl.addEventListener("click", function(event) {
    event.preventDefault();

    var num = parseFloat(splitInputEl.value);
    var amtEach = totalAmt / num;
    h4El.textContent = "Everyone should pay:"
    h2El.textContent = "$" + amtEach.toFixed(2);
});