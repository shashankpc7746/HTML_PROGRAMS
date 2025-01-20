// const add = (x, y) => {
//   return x + y;
// };
// console.log(add(10, 30, 50, 30, 50));

// Three dots we called as a rest operators (...)

function rest(...args) {
  let result = 0;

  for (let arg of args) {
    result = result + arg;
  }
  return result;
}
console.log(rest(20, 40, 20, 50, 40, 69));
