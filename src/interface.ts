interface Greetable {
  name: string;
  greet(phrase: string): void;
}

let user1: Greetable;

user1 = {
  name: "Jane",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Phrase is here");

class Person implements Greetable {
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
