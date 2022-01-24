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

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Surfing"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const simplePerson = {
  name: "Jane",
  age: 32,
};

//to real copy
const sopySimplePerson = { ...simplePerson };

const adddersAgain = (...numbers: number[]) =>
  numbers.reduce((currResult, currentVal) => currResult + currentVal, 0);
const addedNumbersOne = adddersAgain(2, 3, 4, 5, 6, 7);
const addedNumbersTwo = adddersAgain(11, 12);
console.log(addedNumbersOne);
console.log(addedNumbersTwo);
