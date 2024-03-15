// creating root in reat using react dom and render inside it using react create element
const element = React.createElement("h1", {
    id: "heading"
}, "Hello world I am here!");
console.log(element); //object
//  create element takes 3 attributes
// 1. element type  --> eg. h1 etc
// 2. element properties eg.. id, class etc
// 3. element children eg.. text, other elements etc
//  creating root using react dom
const root = ReactDOM.createRoot(document.getElementById("root"));
//  rendering the element in the root
root.render(element);
/// creating nested elements
const parent = React.createElement("div", {
    id: "parent"
}, // parent is react element(react object) => HTML(browser understandable code)
React.createElement("div", {
    id: "child"
}, React.createElement("h1", {
    id: "heading"
}, "Hello I am grand child h1")));
console.log(parent);
root.render(parent);
// creating nested elements sibling elements pass as array in 3rd argument
const parent1 = React.createElement("div", {
    id: "parent1"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        id: "heading"
    }, "I am h1 tag child 1"),
    React.createElement("h1", {
        id: "heading"
    }, "I am h1 tag child 2")
]));
//  creating root using react dom
const div2 = ReactDOM.createRoot(document.getElementById("div2"));
//  rendering the element in the div2
div2.render(parent1);

//# sourceMappingURL=index.6bd02f5a.js.map
