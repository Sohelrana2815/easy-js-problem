const glass = {
  name: "glass",
  color: "blue",
  pice: 12,
  isCleaned: true,
};
// console.log(glass);

const keys = Object.keys(glass);
// output: [ 'name', 'color', 'pice', 'isCleaned' ]

// console.log(keys);

const values = Object.values(glass);
// console.log(values);
// [ 'glass', 'blue', 12, true ]

const pair = Object.entries(glass);
// console.log(pair);
// [
//   ["name", "glass"],
//   ["color", "blue"], // full array : array of array
//   ["pice", 12], // 2D array, key and value
//   ["isCleaned", true],
// ];

// delete glass.isCleaned;
// delete a object property

const { isCleaned, ...shortGlass } = glass;

// console.log(shortGlass);
// console.log(glass);

// freeze

// Object.freeze(glass);
glass.source = "Bangladesh";
glass.price = 5000;
delete glass.name;
delete glass.color;
console.log(glass);

// Object.seal "modify"

Object.seal(glass);
glass.source = "Bangladesh";
glass.pice = 5000;
delete glass.name;
