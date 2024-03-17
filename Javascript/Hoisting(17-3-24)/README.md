# Hoisting in JavaScript

Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This allows you to access variables and functions before they are formally declared in the code.

## Variable Hoisting

Variables declared with `var` are hoisted to the top of their scope and initialized with a value of `undefined`. This means you can access the variable before its actual declaration, but its value will be `undefined` until it's assigned a value.

```javascript
console.log(x); // Output: undefined
var x = 5;


# Function Hoisting
Function declarations are also hoisted in their entirety. This means you can call a function before its actual declaration in the code.

sayHello(); // Output: "Hello!"
function sayHello() {
  console.log("Hello!");
}