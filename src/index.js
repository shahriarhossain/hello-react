import React from 'react';
import ReactDOM from 'react-dom';

//Create the component/jsx
const App = ()=>{
    return <div><h1>Hello from React </h1></div>;
}

//Render the component generated HTML and put it inside the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

