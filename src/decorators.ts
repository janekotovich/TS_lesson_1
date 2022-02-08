function Logger(target: Function) {
  //   console.log("Logging ....");
  //   console.log(target);
}

// @Logger
// class Persons {
//   name = "Jane";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const newPerson = new Persons();

// console.log(newPerson);

function LoggerFactory(logString: string) {
  console.log("LOGGER FACTORY");
  return function (target: Function) {
    console.log("Creating person object...");
    console.log(logString);
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// customizing decorator
@LoggerFactory("LOGGING PERSON FUNCTION")
@WithTemplate("<h1>My person object</h1>", "app")
class Persons2 {
  name = "Jane";
  constructor() {
    console.log("Creating person object...");
  }
}

const newPerson2 = new Persons2();
