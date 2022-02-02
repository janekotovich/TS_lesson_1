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

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addCombinable(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

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
