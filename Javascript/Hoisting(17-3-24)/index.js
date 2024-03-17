var x = 10;
function foo() {
    console.log("first")
}
foo(); // first
console.log(x); // 10



foo1(); // first
console.log(y);  //undefined
var y = 10;
function foo1() {
    console.log("first")
}


foo1(); // first
console.log(yz);  // ReferenceError: yz is not defined
function foo1() {
    console.log("first")
}

