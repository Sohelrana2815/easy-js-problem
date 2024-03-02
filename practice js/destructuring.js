const actor = {
  name: "SohelRana",
  age: 20,
  phone: "01998838992",
  money: 65465874654654643254,
};

// if right side is an object left side of destructuring will be object as well.
const { phone } = actor;
const { name } = actor;
const { money } = actor;
const { age } = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
// const money = actor.money;

console.log(phone);
console.log(phone);
console.log(name);
console.log(name);
console.log(money);
console.log(money);
console.log(age);
console.log(age);
// console.log(age);
// console.log(money);
