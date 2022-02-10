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
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  // :PropertyDescriptor
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  // return {}
}

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parametr decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

// when do decorators execute - at the moment when you defining a class!

function AutoBind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const newButton = document.querySelector("button")!;
// newButton.addEventListener("click", p.showMessage.bind(p));
newButton.addEventListener("click", p.showMessage);

// interface for validation
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};
// Validation with decorators
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}
function Validate(obj: any) {
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objectValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Courses {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Courses(title, price);
  if (!Validate(createdCourse)) {
    throw new Error("Invalid input! Please try again");
  }
  console.log(createdCourse);
});
