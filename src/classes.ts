class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

const marketing = new Department("Marketing");
console.log(marketing);
