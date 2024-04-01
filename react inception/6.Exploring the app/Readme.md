# Monolithic Architecture

Monolithic architecture is a traditional software design approach where all components of an application are tightly integrated into a single codebase and deployed as a single unit. In a monolithic architecture, the frontend, backend, and database layers are typically combined into one cohesive unit. This architecture is characterized by its simplicity, as all development, testing, and deployment activities are centralized within the same codebase.

# Microservice Architecture

Microservice architecture is a modern software design approach that decomposes an application into small, independently deployable services, each responsible for a specific business function. In a microservice architecture, services are loosely coupled and communicate with each other through well-defined APIs. This architecture promotes scalability, flexibility, and resilience by enabling teams to develop, deploy, and maintain services independently.

1. **Page Load Sequence**:
   - As soon as the page loads, in the case of a monolithic architecture, the entire application is rendered and served from the backend.
   - In a microservice architecture, the frontend is rendered first, and then the necessary API calls are made to fetch data from the backend services, resulting in a more dynamic rendering process.

# useEffect Hook

The `useEffect` hook in React is used to perform side effects in functional components. It accepts a callback function as its first argument, which will be executed after the component is rendered. The second argument is an array of dependencies, and the callback function will only be executed if any of the dependencies change between renders.

In scenarios where initial loading states or data fetching are required, the `useEffect` hook is commonly used to trigger API calls and update component state accordingly. Additionally, it can be utilized to implement features such as shimmer UIs to indicate loading states before data is fetched.

# Modifying Const Variables in React

In React, even though variables declared with `const` are immutable, we can effectively update their values using the `useState` hook. The `useState` hook allows us to declare state variables and provides a function to update their values. When the update function is called, React internally handles the state update and triggers a re-render of the component, ensuring that the updated value is reflected in the UI.

Example:
```javascript
const [btnName, setBtnName] = useState("Login");

<button className="login-btn" onClick={() => { setBtnName(btnName !== "Login" ? "Login" : "Logout") }}>{btnName}</button>


This code snippet demonstrates how useState can be used to toggle the text of a button between "Login" and "Logout" when clicked.
```

# Handling Input Text in React
``` js
When handling input text in React, the recommended approach is to use the useState hook to manage the state of the input value and the onChange event to update the state in response to user input. By maintaining the input value in component state, React ensures that the UI stays synchronized with the user's input and enables additional functionality such as form validation and controlled components.