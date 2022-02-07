const names = ["jane", "james"];
const array: Array<string> = []; // string[]
// ts doesn't complain becasue it knows its an array of strings!
// just privude additional data
// array[0].split(" ");

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res("This is recolved");
  }, 2000);
});

// you not sure what data - res is , unless you return it with generic type
promise.then((data) => {
  data.split(" ");
});
