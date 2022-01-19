const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return (arr.reduce((sum, element) => {
    return sum + element
  }, 0))
};

const multiply = function(arr) {

  return (arr.reduce((accum, element) => {
    return accum * element
  }, 1))

};

const power = function(a, b) {

  return a ** b
	
};

const factorial = function(num) {
  //recursive
  if (num === 0) return 1
  return num * factorial(num - 1)
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
