const numbers = [89, 13, 51, 32];
const student = {
  name: "SohelRana",
  age: 32,
  movies: ["king khan", "Dhakar mastan"],
};

// ES6

// 1. template string
const about = `My Name is ${student.name} age fo ${student.age} has number${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//
// 2. arrow function

const fiftyFive = () => 55; // simple arrow function
const addSixtyFive = (num) => num + 65; // one parameter
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// spread operator
const newNumbers = [...numbers]; // copy but separate
// create an new array from an older array and add an element
const currentNumbers = [...numbers, 55];
numbers.push(99);



console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
