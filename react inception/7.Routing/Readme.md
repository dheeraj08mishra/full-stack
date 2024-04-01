# useEffect Hook

The `useEffect` hook in React is a powerful tool for managing side effects in functional components. It allows you to perform actions in response to component lifecycle events, such as when the component is mounted, updated, or unmounted.

Here's how `useEffect` works:

- When provided with an empty dependency array (`[]`), the effect function runs only once, after the initial render.
- If dependencies are specified in the array, the effect function will be called whenever any of those dependencies change between renders.
- Omitting the dependency array altogether will cause the effect function to run after every render.

# useState Hook

The `useState` hook is essential for adding state management to functional components in React. It returns a pair: the current state value and a function to update it. Remember to always declare state variables at the top level of the component and avoid conditional declarations inside if-else blocks.

# Routing in React

Routing in React applications is commonly achieved using the `react-router-dom` library. It provides a declarative way to handle navigation between different views or pages.

Key components and concepts in `react-router-dom` include:
- **BrowserRouter**: Provides routing functionality to the application.
- **Switch**: Renders the first matching `<Route>` or `<Redirect>` component.
- **Route**: Renders UI when its path matches the current URL.
- **Link**: Used to navigate between routes without page refresh.
- **RouterProvider**: Sets up routing for the application.

Avoid using `<a>` tags for navigation in React, as they trigger full-page refreshes. Instead, utilize the `<Link>` component for client-side navigation.

# Single Page Application (SPA)

A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates its content as users interact with it. SPAs offer a smoother user experience by avoiding full-page reloads and only updating relevant parts of the page.

Components in SPAs are dynamically rendered based on the application's state and routing, resulting in faster navigation and improved performance compared to traditional multi-page applications.

# useParams and Link from react-router-dom

The `useParams` hook from `react-router-dom` allows you to access route parameters in your React components. It provides an easy way to retrieve dynamic segments of the URL path.

Similarly, the `<Link>` component is used for client-side navigation in React applications. It generates anchor tags (`<a>`) with proper routing behavior, enabling seamless navigation between different routes without full-page reloads.

