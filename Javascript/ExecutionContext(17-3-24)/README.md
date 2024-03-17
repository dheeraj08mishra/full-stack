# Execution Context in JavaScript

In JavaScript, the concept of execution context plays a crucial role in understanding how code gets executed. There are two main components of execution context:

1. **Memory Component (Variable Environment)**:
   This component is where variables and functions are defined as key-value pairs. It's also known as the variable component. Here, the JavaScript engine sets up memory space for variables and functions before executing the code.

2. **Code (Thread of Execution)**:
   The code component refers to the execution of code line by line. It's also known as the thread of execution. JavaScript is a synchronous, single-threaded language, meaning it executes code line by line in a synchronous manner.

## Understanding JavaScript's Synchronous Execution
JavaScript's synchronous nature means that it can execute code line by line in a synchronous way. This means that each line of code is executed one after the other, in the order they appear in the code.

Understanding execution context and the synchronous nature of JavaScript is fundamental for writing efficient and predictable code.

# Everything happens in JavaScript inside an Execution Context

## Call Stack

The call stack is a stack data structure in JavaScript that maintains the order of execution of execution contexts. At the bottom of the stack is the Global Execution Context (GEC). Whenever a function is executed, a new execution context is created and added to the call stack. Once the call stack becomes empty, the code execution finishes.

The call stack is also known as:
- Execution Context Stack
- Program Stack
- Control Stack
- Runtime Stack
- Machine Stack

Understanding the call stack is essential for understanding the flow of execution in JavaScript programs.
