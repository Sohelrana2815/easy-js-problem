const actor = {
  name: "SohelRana",
  age: 20,
  phone: "01998838992",
  money: 65465874654654643254,
  id: 727,
  address: "Savar,charigramm,dhaka",
};

// if right side is an object left side of destructuring will be object as well.
const { phone, age: boyos } = actor;
const { name } = actor;
const { money } = actor;
const { id } = actor;
const { address } = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
// const money = actor.money;

// console.log(phone);
// console.log(boyos);

// console.log(age);
// console.log(money);

//---- Destructuring from object

const numbers = [45, 89];
const [first, second] = numbers;
const [x, y] = [12, 56];

//
function doubleThem(a, b) {
  return [a * 2, b * 2]; // return an array
}

const [num1, num2] = doubleThem(6, 9);
console.log(num1, num2);
