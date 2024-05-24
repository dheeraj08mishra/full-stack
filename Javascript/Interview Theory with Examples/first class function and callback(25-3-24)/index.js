a(); //function statement
function a() {
  console.log("function statement");
}

//b();//error b is not a function
var b = function () {
  console.log("function expression");
};

b(); //function expression

var c = function xyz() {
  console.log("function expression with name");
  console.log(xyz); // [Function: xyz]
};

c(); //function expression with name

//xyz();//error xyz is not defined

function abc() {
  console.log("first class function");
}
var d = function abc() {
  console.log(abc);
};
d(); // first class function

// setTimeout(function () {
//   console.log("callback");
// }, 5000);





// document.addEventListener('DOMContentLoaded', function() {
//   var btn = document.getElementById('btn');
//   if (btn) {
//     btn.addEventListener('click', function() {
//       console.log("first class function in event listener");
//     });
//   }
// });

///how many times button got clicked

document.addEventListener('DOMContentLoaded',function(){
  var btn = document.getElementById('btn');
  if(btn){
    var count = 0;
    btn.addEventListener('click',function(){
      count++;
      console.log(count);
    });
  }
})