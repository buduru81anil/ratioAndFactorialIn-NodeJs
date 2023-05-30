const factorial = require("../factorial/index");
const ratio = require("../ratio/index");

function ratioAndFactorial(firstValue, secondValue, thirdValue) {
  const ratio = ratioOfTwoNumbers(firstValue, secondValue);
  const factorial = factorialOfNumber(thirdValue);

  return { ratio, factorial };
}

console.log(ratioAndFactorial(10, 5, 3));

module.exports = ratioAndFactorial;
