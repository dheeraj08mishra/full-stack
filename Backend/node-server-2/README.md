# Node.js Architecture

Node.js is built on a non-blocking, event-driven architecture that makes it suitable for handling high-concurrency applications. It follows the event-driven, single-threaded, asynchronous programming model.

## Blocking and Non-Blocking Requests

- **Blocking Requests**: In a blocking request, the execution of code is halted until the operation completes. It means that the next line of code won't execute until the current operation finishes.
- **Non-Blocking Requests**: In a non-blocking request, the code execution continues while the operation is in progress. It allows Node.js to handle multiple requests simultaneously without waiting for each one to complete.

## Thread Pool

Node.js internally uses a thread pool to handle asynchronous I/O operations such as file system operations, network requests, and database queries. The thread pool enables Node.js to perform non-blocking I/O operations efficiently.

## Express.js

Express.js is a popular web application framework for Node.js. It provides a robust set of features for building web and mobile applications. Express simplifies the process of creating server-side applications by providing a minimalist, unopinionated framework with a powerful set of features.

## Postman

Postman is a popular API development tool that allows developers to design, test, and document APIs. It provides a user-friendly interface for making HTTP requests, testing API endpoints, and inspecting responses. Postman is widely used by developers for API development and testing purposes.

## Nodemon

Nodemon is a utility tool for Node.js that monitors changes in the source code files and automatically restarts the server when changes are detected. It is commonly used during the development phase to improve the developer's productivity by eliminating the need to manually restart the server after code changes.

## Middleware

Middleware functions in Express.js are functions that have access to the request and response objects in the Express application's request-response cycle. Middleware functions can perform tasks such as logging, authentication, error handling, and more. They are executed sequentially in the order they are defined.

## Global Level and Function Level Middleware

- **Global Level Middleware**: Global level middleware is defined at the application level and applies to all routes in the Express application. It is defined using the `app.use()` method.
- **Function Level Middleware**: Function level middleware is defined for specific routes or route handlers. It applies only to the routes or route handlers to which it is attached.

## Path Module

The `path` module in Node.js provides utilities for working with file paths. It allows developers to manipulate file paths, resolve and normalize path segments, and perform other path-related operations. The `path` module is commonly used in Node.js applications for tasks such as file system operations and routing.
