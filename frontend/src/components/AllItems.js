import React, { Component } from 'react';
import axios from 'axios';

class AllItems extends Component {
    constructor(props){
        super(props);

    };


    render() {
        let items = this.props.items.map((item) => {
            return(
                <div key={item.id}>
                    <h3><span>Item: </span>{item.name}</h3>
                    <p><span>Description</span> {item.description}</p>
                </div>
            )
        });
        return (
            <div className="App">
                {items}
            </div>
        );
    }
}

export default AllItems;
