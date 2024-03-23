a(); //undefined
function a(){
    console.log(b);
}
var b = 10;
a(); //10;


let c =10;

function d(){
    e();
    function e(){
        console.log(c);
    }
    console.log(c);
}
d(); //10 10


var k=10;
console.log(k)
let l=20;
console.log(l);
{
    var k=20;
    let l=30;
    const m=40;
    console.log(k);
    console.log(l);
}
console.log(k); //20 variable shadowing
var k=50;
console.log(k);
console.log(l);