let name1={
  firstName:"John",
  lastName:"Doe",
  printFullName:function(){
    console.log(this.firstName+" "+this.lastName);
  }
}

name1.printFullName();

let name2={
  firstName:"John1",
  lastName:"Doe1", 
}


// function borrowing
name1.printFullName.call(name2); // John1 Doe1


// better way to use it

let name3={
  firstName:"John3",
  lastName:"Doe3", 
}

let printFullName=function(){
  console.log(this.firstName+" "+this.lastName);
}
printFullName.call(name3); // John3 Doe3
printFullName.call(name2); // John1 Doe1

/// what if print full name accept more arguments

printFullDetails=function(city,state){
  console.log(this.firstName+" "+this.lastName+" "+city+" "+state);
}

printFullDetails.call(name3,"Delhi","Delhi"); // John3 Doe3 Delhi Delhi
printFullDetails.call(name2,"Mumbai","Maharashtra"); // John1 Doe1 Mumbai Maharashtra


let method1 = function(currentRadius){
console.log(2*3.14*this.radius,"current Radius for ref "+currentRadius);
}
let firstAttr = {radius:10};
method1.call(firstAttr,10); // 62.8



/// apply method

printFullDetails.apply(name3,["Delhi","Delhi"]); // John3 Doe3 Delhi Delhi 
let attr2 = {radius:20};
method1.apply(attr2,[20]); // 125.6


// bind method
// bind method is used to create a copy of the function and then we can use it later 
let bindMethod = method1.bind(attr2,20);
console.log(bindMethod); // [Function: bound method1]
bindMethod(); // 125.6
