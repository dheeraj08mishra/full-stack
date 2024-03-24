function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  a = 100;
  return y; /// or  y();
}
var z = x();
console.log(z); // [Function: y]
console.log(z()); // 100

function k() {
  var b = 10;
  function y() {
    console.log(b);
  }

  return y;
}
var z1 = k();
console.log(z1); // [Function: y]
// console.log(z1()); // error

function l() {
  var c = 10;
  function y() {
    var x = 20;
    function z() {
      console.log(x, c);
    }
    x = 100;
    z();

    // return y;
  }
  y();
}

l();

// output 100 10

// settimeout and closure

function m() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
x(); // 1

function n() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log(i); // 6 6 6 6 6 6  // 6 times 6       because of closure
  //setTimeout is async function sßo it will not wait for the loop to complete and it will print the value of i after 1 sec so it will print 6 6 6 6 6  due to closure
}

n();

// to solve the above problem we can use IIFE
// IIFE is a function which is declared and called at the same time
// IIFE will create a new scope for each iteration
//we can use let instead of var

// solution 1

function n() {
  for (var i = 1; i <= 5; i++) {
    function close() {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    console.log(i); // 1 2 3 4 5 6
  }
  close(i);
}





function counter() {
  var count = 0;
  return function () {
    count++;
    console.log(count)
  };
}
var counter1 = counter();
counter1(); // 1
counter1(); // 2

var counter2 = counter();
counter2(); // 1


// counter using constructor function

function Counter() {
    var count = 0;
    this.increment = function () {
        count++;
        console.log(count);
    }
    this.decrement = function () {
        count--;
        console.log(count);
    }   
}

var countData = new Counter();
countData.increment(); // 1
countData.increment(); // 2
countData.decrement(); // 1