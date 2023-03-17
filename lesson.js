// Abstract (A)
// Syntax (S)
// Tree (T)

// SyntaxError

// cnst name = 0

// console.log(const a = 5)

// ReferenceError

// console.log(a);

// let a = "4";

// TypeError

// const boolean = true;

// boolean.split("");

// RangeError

// const arr = [];

// 32bit
// arr.length = 4200000000;

// console.log(arr);

// InternalError

// function foo() {
//   foo();
// }

// foo();

// function checkAge(age) {
//   if (age < 0 || age > 200) {
//     throw new RangeError("Your age is invalid!!!");
//   }

//   return `Your age is ${age}`;
// }

// console.log("start");

// try {
//   console.log(checkAge(5));
// } catch ({ message }) {
//   console.log(message);
// } finally {
//   console.log("working!!");
// }

// console.log("end");

const arr = [1, 2, 3, 4];

const [, , result] = arr[2];

console.log(result); // 3

const obj = {
  name: "Hovhannes",
  age: 35,
  stomach: [],
  hasWife: false,
  hasChild: true,
  countOfChild: 3,
};

function foo({ name, age, stomach, hasWife, hasChild, countOfChild }) {
  return `Hello, mhy name is${name}, I am ${age} y/o`;
}

foo(obj); // {name, age} = obj
