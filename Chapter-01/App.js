const heading1 = React.createElement("h1",
{
    id:"title",
},
"Heading1");

const heading2 = React.createElement("h1",
{
    id:"title2"
}, "Heading2");

const container = React.createElement("div", 
{
    id:"container"
}, [heading1, heading2]);
// create element take three parameters (type,props,children....).

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing  a react element/object inside a root 
root.render(container);