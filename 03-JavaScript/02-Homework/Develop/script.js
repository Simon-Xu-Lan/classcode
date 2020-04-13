// create four arrays for characters
var numeric = "0123456789";
var letter = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter ="";

var numericArr = numeric.split("");
var lowerArr = letter.split("");
var upperArr = letter.toUpperCase().split("");
var specialArr = specialCharacter.split("");

// declare elements
var pwdEl = document.querySelector("#password");
var generateBtnEl = document.querySelector("#generate");
var checkGroupObj = {
    lowercase: lowerArr, 
    uppercase: upperArr, 
    numeric: numericArr, 
    special: specialArr
};

var specialEl = document.querySelector("#special");
var formEl = document.querySelector("#check-group");

specialEl.addEventListener("change", inputSpecial);

//question: how to assign pwdLengthInputEl.value to pwdText. why it is undefined?
var pwdLengthInputEl = document.querySelector("#length");
var pwdText ;
pwdLengthInputEl.addEventListener("input", function(event) {
    pwdText = pwdLengthInputEl.value;
});
console.log(pwdText)


function inputSpecial(event) {
    event.preventDefault();
    
    
    if (this.checked == true) {  // Question, how to remove the element when unchecked.
        var label = document.createElement("LABEL");
        var input = document.createElement("TEXTAREA")
        label.textContent = "Please provide the special characters:"
        input.id = "input";
        label.id = "label";
        formEl.appendChild(label);
        formEl.appendChild(input);
        specialCharacter = input.textContent;
    } else {
        var label = document.querySelector("#label");
        var input = document.querySelector("#input");
        label.parentNode.removeChild(label);
        input.parentNode.removeChild(input);

        // formEl.removeChild(label);
        // formEl.removeChild(input);
    }
    
}

// check if the input is a valid number and assign the length input to pwdLength variable.
var pwdLength
var sliderEl = document.querySelector("#pwdRange");
var outputEl = document.querySelector("#value");
outputEl.innerHTML = sliderEl.value;

sliderEl.oninput = function() {
    outputEl.innerHTML = this.value;
  }

generateBtnEl.addEventListener("click", generatePwd);

// Generate the password
function generatePwd(event) {
    event.preventDefault();
    var pwd = ""; //decare the pwd variable and reset its value.
    var check = 0;
    var newArr =[];
    for (item in checkGroupObj) {
        var element = document.getElementById(item);
        if (element.checked) {
            check++;
            newArr.push(checkGroupObj[item]);
        }
    }

    if (check === 0) {
        alert("please choose at lease one kind of characters");
    }
    
    //generate the password
    pwdLength = parseInt(sliderEl.value);
    for (i=0; i < pwdLength; i++) {
    var t = Math.floor(Math.random() * newArr.length);
    var j = Math.floor(Math.random() * newArr[t].length);
    pwd += newArr[t][j];
    }

    // write the password to the password textarea
    pwdEl.textContent = pwd;
}



