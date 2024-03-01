// function declaration

function add(a, b) {
  return a + b;
}

const sum = add(3, 92);
console.log(sum);

// function expression

const add2 = function (a, b) {
  // anonymous function
  return a + b;
};

const sum1 = add2(5, 15);
console.log(sum1);

// arrow function
const add3 = (a, b) => a + b;

const sum3 = add3(150, 50);

console.log(sum3);

const add4 = (a, b, c, d, e, f) => a + b + c + d + e + f;
const sum4 = (2815, 3260, 727, 31007, 152302);
console.log(sum4);
