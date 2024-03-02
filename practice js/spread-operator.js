const max = Math.max(6, 5, 2, 9, 10, 15, 28, 13);
const numbers = [3, 5, 6, 8, 14, 26, 18, 20, 23];
const arrayMax = Math.max(...numbers);
// console.log(...numbers); // only get numbers not array
// console.log(arrayMax);
// console.log(max);

// use spread operator to copy
const nums = [4, 5, 2, 10];
const nums2 = nums;
nums2.push(12);
// console.log(nums); // output also 12

const friends = [2, 5, 3, 6];
const bondhu = friends;
bondhu.push(9);
// console.log(bondhu);
// console.log(friends);

const friends2 = [5, 15, 18, 7, 23, 30];
const changeFriend = [...friends2]; // copy
friends2.push(50);
console.log(friends2);
console.log(changeFriend);

// advanced
const numbers1 = [...friends, 999]; // add extra elements while copy
console.log(numbers1);
