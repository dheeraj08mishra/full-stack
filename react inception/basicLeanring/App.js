// creating root in reat using react dom and render inside it using react create element
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "lets get started");

// react element using jsx
//jsx code transpile before it reach to js engine - PARCEL- BABEL

const jsxHeading = <h1>React using JSX</h1>;
// react functional component

const Title = () => {
  return <h1>React using JSX Title</h1>;
};

// componet composition
const HeadingComp = () => {
  return (
    <div>
    {/* function call is also work as same */}
        {Title()}   
      <Title />
      <h1>React using JSX</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); /// element render using react dom
root.render(<HeadingComp />); /// component render using react dom
