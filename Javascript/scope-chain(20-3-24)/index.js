console.log(b); //undefined
console.log(a); //cannot access 'a' before initialization
let a =10;
var b = 100;
console.log(window.a); //undefined
console.log(window.b); //100

const c = 10;
c= 100; //TypeError: Assignment to constant variable.
