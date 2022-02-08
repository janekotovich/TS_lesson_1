function Logger(target: Function) {
  console.log("Logging ....");
  console.log(target);
}

@Logger
class Persons {
  name = "Jane";
  constructor() {
    console.log("Creating person object...");
  }
}

const newPerson = new Persons();

console.log(newPerson);
