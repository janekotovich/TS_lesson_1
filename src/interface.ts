interface Greetable {
  greet(phrase: string): void;
}
interface Named {
  readonly name: string;
}
// let user1: Greetable;

// user1 = {
//   name: "Jane",
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Phrase is here");

class Person implements Greetable, Named {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user2 = new Person("James");
user2.greet("Another greeting");
// user1.name = "Pit";
console.log(user2);

interface Apple {
  apple: string;
}
interface Basket extends Apple {
  basket(fruit: string): void;
}

class basket1 implements Basket {
  apple: string;
  constructor(n: string) {
    this.apple = n;
  }
  basket(fruit: string) {
    console.log(`This basket has ${this.apple}`);
  }
}
