import React, {Component} from 'react';

class searchBar extends Component{
    render(){
        return <input onChange = {this.onTextChange} />;
    }

    onTextChange(event){
        console.log(event.target.value);
    }
}

export default searchBar;