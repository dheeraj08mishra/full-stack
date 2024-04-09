# CRUD Operations

- **GET**: Read data from the server.
- **POST**: Create new data on the server.
- **PUT**: Update existing data on the server.
- **DELETE**: Delete data from the server.

# HTTP Status Codes

- **2XX**: Successful responses indicating that the request was received, understood, and accepted.
    - 200: OK
    - 201: Created
    - 204: No Content

- **3XX**: Redirection responses indicating that the client needs to take further action to complete the request.
    - 301: Moved Permanently
    - 302: Found
    - 307: Temporary Redirect

- **4XX**: Client error responses indicating that the request contains bad syntax or cannot be fulfilled.
    - 400: Bad Request
    - 401: Unauthorized
    - 403: Forbidden
    - 404: Not Found

- **5XX**: Server error responses indicating that the server failed to fulfill a valid request.
    - 500: Internal Server Error
    - 501: Not Implemented
    - 503: Service Unavailable

# Node.js Application Crashing with .mjs Extension

If your Node.js application is crashing when using the `.mjs` extension, it could be due to issues with the file's syntax, module resolution, or compatibility with CommonJS modules. To troubleshoot, ensure the following:
- Syntax: Check for any syntax errors in your `.mjs` files.
- Module Resolution: Verify that the paths to imported modules are correct.
- Compatibility: Ensure that the modules you are importing are compatible with ECMAScript modules (ESM).

# Package.json Changes for ECMAScript Modules

To use ECMAScript modules (ESM) in your Node.js application, you need to make the following changes in your `package.json`:
```json
{
  "type": "module",
  "main": "index.mjs"
}


`"type": "module"`: Specifies that the project uses ECMAScript modules.
`"main": "index.mjs"`: Specifies the entry point file for the application, which should have the .mjs extension when using ESM.
