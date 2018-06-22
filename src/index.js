import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyAtvq0lOlbyjjLy4jXmxBElMpPQkSCC2XY';


//Create the component/jsx
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videoList : [] 
        }

        YTSearch({ key: YOUTUBE_API_KEY, term : 'selena'}, videos =>{
            this.setState({
                videoList: videos
            });
        });
    }

    render(){
        return (<div>
            <h1>What Are You Looking For? </h1> 
            <div><SearchBar /> </div>
        </div>);
    } 
}

//Render the component generated HTML and put it inside the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

