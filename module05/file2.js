// (function f1() {
//   console.log("korim");
// })();

// (function f1() {
//   console.log("rakib");
// })();

const { number: num } = require("./file1");
const { number } = require("./file3");

const { f1 } = require("./utils");
console.log("add", f1(num, number));

// const add = require("./utils/add");
// console.log(add(num, number));

console.log(number, num);
