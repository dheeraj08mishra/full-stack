import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Applayout />,
    children: [
      {
        path:'/',
        element: <Body />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/contact',
        element: <Contact />
      }
    ],
    errorElement: <Error />
  },
  {
    path:'/about',
    element: <About />
  },
  {
    path:'/contact',
    element:<Contact />
  },
  {
    path:'/order',
    element: <div>Order</div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
