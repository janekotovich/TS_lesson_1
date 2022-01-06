const addNumbers = function (
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
) {
  showResult && console.log(`${phrase} ${n1 + n2}`);
  if (!showResult) {
    return n1 + n2;
  }
};

const number1 = 5;
const number2 = 5.8;
const printResult = true;
const resultPhrase = "And the result is:";

addNumbers(number1, number2, printResult, resultPhrase);
