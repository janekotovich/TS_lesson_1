function Logger(target: Function) {
  //   console.log("Logging ....");
  //   console.log(target);
}

@Logger
class Persons {
  name = "Jane";
  constructor() {
    console.log("Creating person object...");
  }
}

const newPerson = new Persons();

// console.log(newPerson);

function LoggerFactory(logString: string) {
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

// customizing decorator
@LoggerFactory("LOGGING PERSON")
class Persons2 {
  name = "Jane";
  constructor() {
    console.log("Creating person object...");
  }
}

const newPerson2 = new Persons2();

console.log(newPerson2);
