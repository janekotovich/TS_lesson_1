// const names = ["jane", "james"];
// const array: Array<string> = []; // string[]
// // ts doesn't complain becasue it knows its an array of strings!
// // just privude additional data
// // array[0].split(" ");

// const promise: Promise<string> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("This is recolved");
//   }, 2000);
// });

// // you not sure what data - res is , unless you return it with generic type
// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Jane" }, { age: 33 });
const mergedObj2 = merge({ name: "Jane", country: "Russia" }, { age: 33 });
console.log(mergedObj.name);
console.log(mergedObj2.country);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no value";
  if (element.length === 0) {
    description = `Got ${element.length} element.`;
  } else if (element.length > 1) {
    description = `Got ${element.length} elements.`;
  }
  return [element, description];
}

console.log(countAndDescribe("Hi there!"));
