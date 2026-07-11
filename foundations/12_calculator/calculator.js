const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2
};

const sum = function(array) {
	return array.reduce((acc, curr) => acc+curr, 0)
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc*curr)
};

const power = function(base, exponent) {
	return base**exponent
};

const factorial = function(num1) {
  let result = 1
	for(let i = 0; i < num1; i++) {
    result *= i+1
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
