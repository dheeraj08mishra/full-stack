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


function sum(obj1, obj2){
    obj1.value =400;
    return obj1.value + obj2.value;
}
function sum1(obj1, obj2){
    return obj1.value + obj2.value;
}

var obj1 ={
    value:100
}
var obj2 = {
    value : 200
}
console.log(sum(obj1,obj2));
console.log(sum1(obj1,obj2));

console.log(obj1.value) // 400

// if we pass obj as reference and we change the attrbiute value it will impact everywhere

// to overcome above issue we should create a copy and then pass {...obj1}
