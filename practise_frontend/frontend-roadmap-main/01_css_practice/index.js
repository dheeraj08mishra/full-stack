console.log("hello world");
function generateNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(generateNumberBetween(10, 20));