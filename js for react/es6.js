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
// 2. arrow function

const fiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// spread operator

