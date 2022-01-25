class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
    this.describe();
  }
  describe(this: Department) {
    console.log(`Department ${this.name}`);
  }
}

const marketing = new Department("Marketing");
console.log(marketing);

marketing.describe();
const marketingCopy = { name: "S", describe: marketing.describe };
marketingCopy.describe();
