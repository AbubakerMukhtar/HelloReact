
import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (<h1 id="heading" tabIndex="5">My React Element is Here!</h1>);


//  React Component
// 1.Class based Component - OLD
// 2.Functional Component - NEW


// Using componets into a component is compostion of componets
// React Functional Component
const MyComponent2 = () => <h6>Component 2 is Here!!!!</h6>
function MyComponent3() {
    return(
    <h6>Component 3 is Here!!!!</h6>);
}

const MyComponent = () => (
    <div id="container">
        <h1>My React Functional Component is Here!!!!</h1>
        {12 + 18}
        {heading}
        <MyComponent2></MyComponent2>
        <MyComponent3 />
    </div>
)

root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MyComponent());






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