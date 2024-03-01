function add(num1 = 10, num2 = 3) {
  // default parameter num2 = 3
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}
// const sum = add();

function add1(a = 3, b, c) {
  const result1 = a - b + c;
  console.log(a, b, c, result1);
  return result1;
}

const subs = add1(undefined, 2, 4);

function fullName(first, last = "") {
  // if default value is a string give it an empty array
  const full = first + " " + last;
  return full;
}

function friends(numbers = []) {} // parameter is an array

function person(human = {}) {} // parameter is an object
