//var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

const money = 24;
const rich = money + 25;
// console.log(rich);

let count = 2;
count = 4;
const newCount = rich + count;
// console.log(newCount);
const numbers = [12, 34, 55, 61, 78, 51];
// numbers = [3, 6, 7, 3, 6, 7, 78];
//-------- full assign array not possible using const
numbers[2] = 50;
numbers.push(1, 2, 3, 4, 5);
// not reassign but modify something
// console.log(numbers);

// object
const student = {
  name: "SohelRana",
  class: 100,
  id: 727,
};

student.name = "MOON";
student.class = 4090;
student.id = 2815;

// student = {
//   name: "Moon",
//   id: 2815,
// };
// console.log(student);

// let can reassign anything

// loop const
for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
}
console.log(sum);
