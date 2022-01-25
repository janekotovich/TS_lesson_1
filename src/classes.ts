class Department {
  name: string;
  private employees: string[] = [];
  constructor(n: string, private readonly id: string, public color: string) {
    this.name = n;
    this.id = id;
    this.color = color;
    this.describe();
  }
  describe(this: Department) {
    console.log(`Department ${this.name} ${this.id}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeesInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const marketing = new Department("Marketing", "123", "Blue");
console.log(marketing);

marketing.describe();
// const marketingCopy = { name: "S", describe: marketing.describe };
// marketingCopy.describe();
marketing.addEmployee("James");
marketing.addEmployee("Jackson");
marketing.describe();
marketing.printEmployeesInfo();

class ItDepartment extends Department {
  constructor(id: string, color: string, public admins: string[]) {
    super("IT", id, color);
    this.admins = admins;
  }
}

const newItD = new ItDepartment("333", "red", ["Bob", "Jack"]);
console.log(newItD);
