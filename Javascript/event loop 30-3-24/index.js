console.log("start");

setTimeout(() => {
  console.log("callBack");
}, 0);

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", () => {
    console.log("click");
  });
});

console.log("end");

console.log("start 2");
setTimeout(() => {
  console.log("callBack 2");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log("fetch call"))
console.log("end 2");
