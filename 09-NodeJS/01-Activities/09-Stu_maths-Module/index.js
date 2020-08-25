var maths = require('./maths.js');
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);
var operation = process.argv[2];

switch (operation) {
    case "sum":
       console.log(maths.sum(num1, num2)) ;
       break;
    case "difference":
        console.log(maths.difference(num1, num2));
        break;
    case "product":
        console.log(maths.product(num1, num2));
        break;
    case "quotient":
        console.log(maths.quotient(num1, num2));
    default:
        console.log("check your math");
}