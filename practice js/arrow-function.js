const add = (x, y) => x * y;
const multiply = add(25, 25);
// console.log(multiply);

const difference = (x, y) => x - y;
const multiply1 = (first, second, third) => first * second * third;

// single parameter or 1 parameter
const getAge = (person) => person.phone;
const student = {
  name: "SohelRana",
  age: 20,
  phone: 1998838992,
  mobile: "Redmi Note 9 Pro",
};

const age = getAge(student);
// console.log(age);

const getThird = (numbers) => numbers[2];

const third = getThird([25, 26, 56, 28, 29, 30]);
// console.log(third);

const doubleIt = (num) => num * 2;
const double = doubleIt(9);
// console.log(double);

// No parameter
const getPI = () => Math.PI;

const piValue = getPI();
// console.log(getPI());
// console.log(piValue);

// large arrow function. if you want to get anything returned form this function. then you have to use the return keyword

const doMath = (x, y, z) => {
  const sum = x + y + z;
  const multiply = x * y * z;
  const subtraction = x + y - z;
  const result = sum + multiply * subtraction;
  return result;
};

const math = doMath(25, 10, 13);
console.log(math);
