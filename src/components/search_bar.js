import React, {Component} from 'react';

class searchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            term : 'all'
        };

        this.onTextChange = this.onTextChange.bind(this);
    }
    
    render(){
        return (
            <div>
                <input 
                    value = {this.state.term}
                    onChange = {this.onTextChange} />
                <h6>Searching for {this.state.term} </h6>
            </div>
        );
    }

    onTextChange(event){
        this.setState({
            term: event.target.value
        });
    }
}

export default searchBar;