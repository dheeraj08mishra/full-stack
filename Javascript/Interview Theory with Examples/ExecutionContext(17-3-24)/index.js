var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

/* the code executed as follows
first -> memory creation phase  Js engine will create memory for n, square, square2, square4

for n -> memory created and initial value assigned undefined and for square whole function is assigned
for square2 and square4 -> memory created and initial value assigned undefined

second -> code execution phase
for n -> value assigned 2
for line 6 -> brand new execution context is created and memory is allocated for ans and num 
               code executed and ans is assigned 4
                return ans -> 4
                and execution context is removed from stack
 square2 is assigned 4
for line 7 -> brand new execution context is created and memory is allocated for ans and num 
               code executed and ans is assigned 16
                return ans -> 16
                and execution context is removed from stack
square4 is assigned 16

*/
console.log(square2);
console.log(square4);

/// to handle n number of arguments wuthout knowing the count of those

function sum() {
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum(1, 2, 3));

console.log(sum(1, 2, 3, 4, 5));

/// using es6 way

function sum1(...args) {
  console.log(args);
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sum(1, 2, 3));

console.log(sum(1, 2, 3, 4, 5));



// object declaration with [] 
//1st benfit we can have space in keys using obj['living city']  something like

// 2nd benefit we can pass variable

var sal = 'salary';
var obj ={
  a:123,
  b:345
}
obj[sal] = '######';
