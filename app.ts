function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result ${num}`);
}

function addAndHandler(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}
printResult(add(5, 12));

let someValue: undefined;

//////////////////////////
// Function as Types

// let combineValues: Function;
// let combineValues: () => number;
let combineValues: (a: number, b: number) => number;
// combineValues=printResult - wrong as well bcs we dont want to change function
combineValues = add;
// combineValues = 5;
console.log(combineValues(8, 8));

addAndHandler(10, 20, (result) => {
  console.log(result);
});
