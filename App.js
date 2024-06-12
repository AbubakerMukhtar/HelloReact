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

const parent = React.createElement('div',{id:"parent"},
    [React.createElement('div',{id:"child"},
        [React.createElement('h1',{},"I am heading tag"),
        React.createElement('h2',{},"I am headingTwo tag")
        ]),
    
    React.createElement('div',{id:"child2"},
        [React.createElement('h1',{},"I am heading tag2"),
        React.createElement('h2',{},"I am headingTwo tag2")
        ]),
    ]
);
console.log("parent",parent);
root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
