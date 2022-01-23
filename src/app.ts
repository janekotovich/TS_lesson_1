let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "hey";
if (typeof userInput === "string") {
  userName = userInput;
}

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }
// let result = generateError("An error occured", 700);
// console.log(result);

const button = document.querySelector("button");

function clickHandler(message: string) {
  console.log("CLICKED" + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You are welcome"));
}
