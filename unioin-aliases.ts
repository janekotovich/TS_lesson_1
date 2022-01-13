type CanCombine = number | string;
type ConversitonDesc = "as-number" | "as-string";

const combine = function (
  input1: CanCombine,
  input2: CanCombine,
  resultConversion: ConversitonDesc
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
  return result;
};

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-string");
console.log(combinedNames);

const combinedStringAges = combine("22", "23", "as-number");
console.log(combinedStringAges);

type User = { name: string; age: number };
const a1: User = { name: "Janey", age: 32 };

type UserD = { name: string; age: number };

function greet(user: UserD) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: UserD, checkAge: number) {
  return checkAge > user.age;
}
