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

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
extractAndConvert({ name: "James" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // returns -1 if doenst find anything
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Cat");
textStorage.addItem("Ginger");
textStorage.removeItem("Cat");
console.log(textStorage);

// because due to object structure you have to pass specifically same object, not a reference to it
// const objStorage = new DataStorage<object>();
// const miloObj = { name: "Milo" };
// const maryObj = { name: "Mary" };
// objStorage.addItem(miloObj);
// objStorage.addItem(maryObj);

// //
// objStorage.removeItem(miloObj);
// console.log(objStorage.getItems());

// Generic Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Jane", "Surf"];
// cannot do any changes with Readonly - no add props no change props
// names.push("Ginger");
// names.pop("Jane");

//Generic types vs Union
// Union - gives mixed ability - you can add a mixed els
let mixedArr: string[] | number[] | boolean[] = [];

//then if further you neeed string method - you not sure are all els strings or no
