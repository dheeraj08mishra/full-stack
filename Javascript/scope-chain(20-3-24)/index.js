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