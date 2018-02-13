import React, { Component } from 'react';
import axios from 'axios';

class NewItems extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        let name = this.refs.name.value;
        let desc = this.refs.description.value;

        axios.post('http://localhost:8080/api/items', {
            name: name,
            description: desc
        })
            .then(function (item) {
               this.props.handleSubmit(item);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log("Name:" + name + "\t Description" + desc);
        //window.location.reload();
    }


    render() {
        return (
            <div className="App">
               <h1>New Item</h1>

                <input ref="name" placeholder="Enter Name of the item" />
                <input ref="description" placeholder="Enter a description" />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default NewItems ;
