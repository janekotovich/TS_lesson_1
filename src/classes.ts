abstract class Department {
  static fiscalYear = 2020;
  name: string;
  protected employees: string[] = [];
  constructor(n: string, private readonly id: string, public color: string) {
    this.name = n;
    this.id = id;
    this.color = color;
    this.describe();
  }

  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeesInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// const marketing = new Department("Marketing", "123", "Blue");
// console.log(marketing);

// marketing.describe();
// // const marketingCopy = { name: "S", describe: marketing.describe };
// // marketingCopy.describe();
// marketing.addEmployee("James");
// marketing.addEmployee("Jackson");
// marketing.describe();
// marketing.printEmployeesInfo();

class ItDepartment extends Department {
  constructor(id: string, color: string, public admins: string[]) {
    super("IT", id, color);
    this.admins = admins;
  }
  addEmployee(name: string) {
    if (name === "Andrew") {
      return;
    }
    this.employees.push(name);
  }
  describe() {
    console.log("It Depatment");
  }
}

class Accounnting extends Department {
  private lastReport: string;
  private static instance: Accounnting;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in correct value");
    }
    this.addReport(value);
  }

  private constructor(private reports: string[]) {
    super("Accounting", "7", "pink");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (Accounnting.instance) {
      return this.instance;
    }
    this.instance = new Accounnting([]);
    return this.instance;
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  describe() {
    console.log(`Accounting department lastreport - ${this.lastReport}`);
  }
}

const newItD = new ItDepartment("333", "red", ["Bob", "Jack"]);
console.log(newItD);
newItD.addEmployee("Buddy");
// const accounting = new Accounnting([]);
// accounting.mostRecentReport = "Year end report";
// console.log(accounting.mostRecentReport);
newItD.addEmployee("Andrew");

console.log(newItD);
const employee1 = Department.createEmployee("Max");
console.log(employee1);
console.log(Department.fiscalYear);
// accounting.describe();

const accounting = Accounnting.getInstance();
