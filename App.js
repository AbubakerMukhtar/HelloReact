
import React from "react";
import ReactDOM from "react-dom/client";

// JSX is  like HTML and XML like syntax
// JSX is  not in React or JS
// JSX code transpiled before it reaches to JS engine and its done by Bundler --> Bable packge in our bundler
// JSX ==> Bable transpile it to React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)

const reactElement= React.createElement("h1",{id:"heading"},"This is ReactElement Heading!");
console.log("reactElement",reactElement);
const jsxElement= (<h1 id="heading" tabIndex="5">This is jsxElement Heading!</h1>);
console.log("jsxElement",jsxElement);

//reactElement === jsxElement

root = ReactDOM.createRoot(document.getElementById('root'));
root.render(reactElement);






// const headingReact = React.createElement('h1',{id:"heading", attr:'XYZ0'},"This heading is the from React!");\
/**
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1>I am heading tag</h1>
 *      <h2>I am headingTwo tag</h2>
 *  </div>
 * </div>
 * 
 * ReactElement(Object)=> HTML(Browser Undersatands)
 * 
 */