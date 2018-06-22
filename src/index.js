import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

//Create the component/jsx
class App extends Component {
    render(){
        return (<div>
            <h1>What Are You Looking For? </h1> 
            <div><SearchBar /> </div>
        </div>);
    } 
}

//Render the component generated HTML and put it inside the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

