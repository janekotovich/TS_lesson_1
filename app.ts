// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Janey",
//   age: 32,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

enum Course {
  MATH = "Math",
  LIT = 8,
  PHIS,
}

const person = {
  name: "Janey",
  age: 32,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
  course: Course.PHIS,
};

console.log(person);
let favActivities: (string | number)[];
favActivities = ["Sport", 2];
let anotherHobbies: any[];
anotherHobbies = ["fishing", "hiking", "surfing", false, true, 1, 12, "123"];

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
console.log(product.tags[1]);
person.hobbies.forEach((hobbie) => console.log(hobbie.toUpperCase()));

console.log(person.role === 5);
console.log(person.role === 6);
console.log(person.course);
