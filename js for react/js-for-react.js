// Notes
/**
 * 1. Need to know js for start react
 * 2.
 */

/**
 *  Fundamentals of Java Script
 */

/**
 * 1. How to declare a variable using let and const
 */

const fatherName = "Mosharrof Hossen";
let season = "Summer";
season = "winter"; // let is changeable

// 2. 6 basic conditions >,<,===,!==, <=,>=
// multiple conditions: And (&&), Or(||)

if (fatherName === "Mosharrof Hossen" || season === "Summer") {
} else if (fatherName === "Arnold") {
} else {
}

// 3. array[]
// index,
// length, push
const numbers = [41, 51, 7, 13, 61, 45];

numbers[0] = 234;

// 4. loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function declare

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const output = multiply(34, 14);

// 6. object
// 3 ways to  access property by name
const person = {
  name: "sohelrana",
  religion: "Islam",
  id: "727",
  item: ["mobile", "pc", "tablet", "camera"],
};

const myVariable = "id";

console.log(person.name); //1. direct by property
console.log(person["item"]); //2. access via property name string
console.log(person[myVariable]); // 3. access via property name via a variable
