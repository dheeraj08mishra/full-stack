Function Statement vs. Function Expression
Function Statement (Function Declaration)

a(); // Output: "function statement"

function a() {
    console.log("function statement");
}


b(); // Output: Error: b is not a function

var b = function() {
    console.log("b called");
};
b();

Difference
The main difference between a function statement and a function expression is hoisting.

Function statements are hoisted entirely to the top of their scope, so they can be called before their declaration.
Function expressions are not hoisted in the same way, resulting in an error if called before their declaration.
Function Types
Function Declaration
Function declarations are also known as function statements. They define a named function using the function keyword.

Anonymous Function
var anonymous = function() {
    console.log("Anonymous function");
};

Anonymous functions are defined without a name.

Named Function Expression

var named = function namedFunc() {
    console.log("Named function expression");
};

Named function expressions have a name that can be referenced inside the function itself.

Function Arguments and Parameters
In JavaScript, parameters are the variables defined in the function signature, while arguments are the values passed into the function when it's called.

First-Class Functions
JavaScript treats functions as first-class citizens, meaning they can be passed as arguments to other functions, returned from functions, assigned to variables, and stored in data structures.

Callback Functions
Callback functions are functions passed as arguments to other functions, which are then invoked at a later time or in response to an event.

Example:

setTimeout(function() {
    console.log("Callback function executed after 5 seconds");
}, 5000);

Garbage Collection and Removing Event Listeners
Event listeners can consume memory, especially if they are not removed properly. It's good practice to remove event listeners when they are no longer needed to avoid memory leaks.

// Adding an event listener
element.addEventListener('click', clickHandler);

// Removing an event listener
element.removeEventListener('click', clickHandler);
