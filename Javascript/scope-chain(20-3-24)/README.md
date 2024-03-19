## Understanding Scope, Lexical Environment, and Scope Chain in JavaScript

### Scope

Scope refers to the context in which variables and functions are accessible during runtime. It defines the boundaries within which a variable or function can be accessed.

### Lexical Environment

A lexical environment consists of two main components:
- **Local Memory**: This contains variables and function declarations defined within the current scope.
- **Lexical Environment of the Parent**: This refers to the lexical environment of the outer scope or the scope in which the current scope is nested.

### Scope Chain

The scope chain is formed by the combination of lexical environment and scoping rules. It defines the path through which JavaScript resolves variable references.

- **Lexical and Parent References**: Each scope maintains a reference to its parent lexical environment, forming a chain of nested scopes.
- **Scoping Rules**: JavaScript follows a mechanism called lexical scoping, where inner functions have access to variables and functions defined in their outer scopes.

In summary, understanding scope, lexical environment, and scope chain is crucial for grasping how JavaScript manages variable and function access within different contexts.
