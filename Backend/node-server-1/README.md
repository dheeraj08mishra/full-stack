# Request-Response Cycle

The request-response cycle is a fundamental concept in web development that describes the flow of communication between a client and a server. Here's an overview of the key stages in the request-response cycle:

1. **Client Sends Request**: The cycle begins when a client (such as a web browser) sends a request to a server. The request typically includes information such as the URL, HTTP method (GET, POST, etc.), headers, and optionally, a request body.

2. **Server Processes Request**: Upon receiving the request, the server processes it based on the provided information. This may involve routing the request to the appropriate handler, executing server-side logic, accessing databases or other resources, and generating a response.

3. **Server Sends Response**: After processing the request, the server sends back a response to the client. The response includes an HTTP status code indicating the outcome of the request (e.g., 200 for success, 404 for not found), response headers, and optionally, a response body containing data or content.

4. **Client Receives Response**: The client receives the response from the server and processes it accordingly. This may involve rendering HTML content, executing JavaScript code, or handling data returned by the server.

5. **Cycle Continues or Ends**: Depending on the nature of the application and user interactions, the request-response cycle may continue with subsequent requests and responses (e.g., in the case of a multi-page web application), or it may end after a single interaction (e.g., in the case of a simple API request).

# Port

A port is a communication endpoint used by computers and network devices to establish connections and communicate over a network. In the context of web development, a port is often associated with network services running on a server.

- **Port Number**: Ports are identified by numerical values ranging from 0 to 65535. Well-known ports (0-1023) are reserved for specific services (e.g., HTTP uses port 80, HTTPS uses port 443), while registered ports (1024-49151) are assigned to specific applications or protocols by the Internet Assigned Numbers Authority (IANA).

# Server vs Web Server

- **Server**: In a broad sense, a server refers to any computer or device that provides services or resources to other devices on a network. Servers can handle various types of requests, including file storage, database access, computation, and more.

- **Web Server**: A web server is a specialized type of server that is specifically designed to host and serve web content over the internet. Web servers handle HTTP requests from clients (such as web browsers) and respond with HTML pages, images, files, or other resources.

# Node.js

Node.js is a runtime environment for executing JavaScript code on the server side. It is built on the V8 JavaScript engine from Google Chrome and provides a platform for building scalable and efficient server-side applications.

- **V8 Engine**: Node.js utilizes the V8 JavaScript engine, which is also used by Google Chrome and other Chromium-based browsers. The V8 engine compiles JavaScript code to native machine code, enabling high-performance execution.

# Bun.js

Bun.js is a web framework for Node.js that aims to provide a simple and intuitive way to build web applications and APIs. It emphasizes modularity, simplicity, and developer productivity, offering features such as routing, middleware, and request/response handling.

# Packages in Node.js

Node.js ecosystem consists of a vast array of packages (also known as modules or libraries) that extend its functionality and enable developers to build a wide range of applications. Some commonly used packages include:

- **File System (fs)**: Provides file system-related operations such as reading/writing files, creating directories, and more.
- **HTTP**: Allows creating HTTP servers and making HTTP requests.
- **Express**: A popular web framework for building web applications and APIs.
- **Axios**: A promise-based HTTP client for making asynchronous HTTP requests.
- **Lodash**: A utility library that provides functions for common programming tasks.

# How to Run Code on Specific Port

In Node.js, you can specify the port on which your server listens by setting the `port` parameter when calling the `listen()` method of the HTTP server instance. Here's an example:

```javascript
const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

# Favicon

A favicon (short for favorite icon) is a small image or icon associated with a website that is displayed in the browser's address bar, tabs, bookmarks, and other areas. It helps users identify and distinguish between different websites.

# Wrapper Function in Node.js

A wrapper function in Node.js refers to the anonymous function that wraps the module code within a CommonJS module wrapper. This wrapper function provides access to Node.js-specific variables and modules such as require, exports, module, **dirname, and **filename.

# Header in Node.js

In Node.js, headers are key-value pairs sent between the client and server to convey additional information about the HTTP request or response. HTTP headers contain metadata such as content type, content length, cookies, cache directives, and more.

# SetHeader in Node.js

The setHeader() method in Node.js is used to set the value of a specific HTTP header in the response sent by the server. It takes two parameters: the name of the header and its value. For example:

```javascript
res.setHeader("Content-Type", "text/html");
```

# Cache Controlling

Cache control is a mechanism used in web development to control how web browsers and other intermediary devices cache and re-use resources such as HTML files, CSS stylesheets, JavaScript files, and images. It involves setting HTTP headers such as Cache-Control, Expires, and ETag to specify caching behavior.

# Built-in HTTP Server

Node.js provides a built-in HTTP module that allows you to create HTTP servers and handle HTTP requests and responses without the need for additional dependencies. You can use the createServer() method to create an HTTP server instance and handle requests using callback functions.

# Passing JSON Data and Accept

In Node.js, you can pass JSON data in an HTTP request body or response body by serializing/deserializing JSON objects using the JSON.stringify() and JSON.parse() methods, respectively. Additionally, the Accept header in HTTP requests specifies the preferred content type (e.g., JSON, XML, HTML) that the client is willing to accept in the response.

# Listen Port and Host Method

In Node.js, the listen() method is used to bind and listen for connections on a specified port and optional host. You can specify the port and host as arguments to the listen() method to configure the server to listen on a specific network interface. For example:

```javascript
const port = 3000;
const host = "127.0.0.1";

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
```

# What If We Are Not Ending the Response

If you do not end the response in a Node.js HTTP server, the client's request will remain open indefinitely, leading to a potential memory leak and resource exhaustion on the server. It is essential to always end the response (e.g., using res.end() or res.send()) to properly handle and close the HTTP connection.

# Load Balancer: Nginx, Caddy, Go-lang

A load balancer is a network device or software application that distributes incoming network traffic across multiple servers to ensure optimal resource utilization, reliability, and scalability. Popular load balancer solutions include Nginx, Caddy, and custom implementations using programming languages like Go.

# Sticky Algorithm and Round Robin Algorithm

Sticky (or session affinity) and round-robin are two common load balancing algorithms used by load balancers to distribute traffic among backend servers:

# Sticky Algorithm:

Sticky sessions ensure that subsequent requests from the same client are routed to the same backend server. This is achieved by associating a client session with a specific server based on criteria such as IP address, session cookie, or other session identifiers.

# Round Robin Algorithm:

Round-robin load balancing distributes incoming requests across a group of servers in a circular order. Each server receives an equal share of requests, ensuring a balanced distribution of traffic and efficient resource utilization.

# CPU Intensive Task: Why Not in Node.js

Node.js is primarily designed for handling I/O-bound and event-driven applications, making it well-suited for tasks such as network operations, file I/O, and real-time applications. However, Node.js may not be suitable for CPU-intensive tasks (e.g., heavy computation, image processing) that require significant CPU resources and block the event loop, potentially leading to degraded performance and responsiveness.

# Readline in Node.js

The readline module in Node.js provides an interface for reading input streams (e.g., standard input) line-by-line from a readable stream, such as a file or standard input. It is commonly used for building interactive command-line interfaces (CLIs) and processing text-based data in Node.js applications.
