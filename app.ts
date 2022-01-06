// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Janey",
  age: 32,
  hobbies: ["Sports", "Cooking"],
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
