type Admin = {
  name: string;
  privilages: string[];
};

type GeneralEmployee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & GeneralEmployee;

const e1: ElevatedEmployee = {
  name: "Jane",
  privilages: ["create-server"],
  startDate: new Date(),
};

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function addCombinable(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

type UnknownEmployee = GeneralEmployee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`My name IS ${emp.name}`);

  if ("privilages" in emp) {
    console.log(`Privilages are: ${emp.privilages}`);
  }

  if ("startDate" in emp) {
    console.log(`Start date: ${emp.startDate}`);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving..");
  }
}
class Truck {
  drive() {
    console.log("Driving a Truck ..");
  }
  loadCargo(amount: number) {
    console.log(`Loading cargo ... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving with speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 123 });

//version 1 - Type Casting
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user_input")!
// );

//version 2 - Type Casting
const userInputElement = document.getElementById(
  "user_input"
)! as HTMLInputElement;
userInputElement.value = "Hi there!";

interface ErrorContainer {
  // id: string;
  // { email: "Not a valid email", username: "Must start with a character"}
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addCombinable(a: number, b: number): number;
function addCombinable(a: string, b: string): string;
// TS merges function information above and functiuon declaration below togther
function addCombinable(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const resultOfComb = addCombinable(1, 5);
// const stringResultofCombinable = addCombinable("hey", "you") as string;
const stringResultofCombinable = addCombinable("hey", "you");
// TS not sure which one we get back - string or number - though doesnt let you call a string method
// thats why we specify that it would be string
stringResultofCombinable.split(" ");
//function oveload helps when ts cannot infer what you get back by its own

// OPtional chaining
// You not sure about certainity - like fetching API

const fetchedUserData = {
  id: "u1",
  name: "Janw",
  job: {
    title: "Little title",
    description: "Bigger description",
  },
};

// optional chaining helps us safely chain access

console.log(fetchedUserData?.job?.title);

const userInputs = "";
// but if userInputs = "" - default fallback cicks in even though shouldnt
const storedData = userInputs || "DEFAULT";

console.log(storedData);
// nulish coalescing operato - only cuts out Null or Undefined!
const nulishStoreData = userInputs ?? "DEFAULT";
console.log(nulishStoreData);
