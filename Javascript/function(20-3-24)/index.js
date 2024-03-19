var x =1;
a();
b();
console.log(x);
function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x);
};

var a = 1;
function b() {
    var y  = 2;
}
console.log(window.a); //1
console.log(window.b); //undefined
console.log(window.y); //undefined
// console.log(y); //ReferenceError: y is not defined
console.log(this.a); //1
