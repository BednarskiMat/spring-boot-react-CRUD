import React, { Component } from 'react';
import axios from 'axios';
import AllItems from "./AllItems";
import NewItems from "./NewItems";

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        console.log("mounted");
        axios.get(`http://localhost:8080/api/items`)
            .then(res => {
                let response = res.data;
                this.setState({ items: response });
                console.log(response);
            });
    }
    handleSubmit(item){
        console.log(item);
    }

    render() {
        return (
            <div className="App">
                <NewItems handleSubmit={this.handleSubmit}/>
                <AllItems items={this.state.items}/>
            </div>
        );
    }
}

export default Body;
