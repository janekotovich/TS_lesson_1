const Username = "Jane";
// Username = "janey";

let age = 23;
age = 32;

// global scope
var result;
function addAgain(a: number, b: number) {
  result = a + b;
  return result;
}

// if (age > 32) {
//   var isOld = true;
// }
// //still will work bcs isOld - Global and Fn scope
// console.log(isOld);

// if (age > 32) {
//     var isOld = true;
//   }
//   //Not gonna work - let - block scope!
//   console.log(isOld);

const arrowAdd = (a: number, b: number = 1) => a + b;

console.log(arrowAdd(7, 27));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const buttonSm = document.querySelector("button");
if (buttonSm) {
  buttonSm.addEventListener("click", (e) => console.log(e));
}

//set default from the right!
console.log(arrowAdd(7));
