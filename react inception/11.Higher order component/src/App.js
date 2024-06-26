import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestsurantMenu from "./components/RestsurantMenu";
import ShimmerUI from "./components/ShimmerUI";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));



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
      },
      {
        path:'/grocery',
        element: <Suspense fallback={<ShimmerUI/>} ><Grocery /></Suspense>
      },
      {
        path:'/restaurant/:restaurantId',  // Dynamic route
        element: <RestsurantMenu />
      }
    ],
    errorElement: <Error />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
