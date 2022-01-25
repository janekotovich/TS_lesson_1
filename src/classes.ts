class Department {
  name: string;
  private employees: string[] = [];
  constructor(n: string) {
    this.name = n;
    this.describe();
  }
  describe(this: Department) {
    console.log(`Department ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeesInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const marketing = new Department("Marketing");
console.log(marketing);

marketing.describe();
// const marketingCopy = { name: "S", describe: marketing.describe };
// marketingCopy.describe();
marketing.addEmployee("James");
marketing.addEmployee("Jackson");
marketing.describe();
marketing.printEmployeesInfo();
