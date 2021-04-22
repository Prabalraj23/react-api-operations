import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {

    state = {
        name : '',
    };

    handleChange = event =>{
        this.setState({name: event.target.value})
    }

    handleSubmit = event =>{
        event.preventDefault();

        const user = {
            name: this.state.name,
        }
        axios
        .post(`https://jsonplaceholder.typicode.com/users`,{ user })
        .then(res =>{
            console.log(res.data);
        
        })
    }
   
    render() {
        return (
            <div>
            <h2>post method</h2>
              <form onSubmit={this.handleSubmit}>
              
                <label>
                
                    person name:
                    <input type = "text" name = "name" onChange={this.handleChange} />
                </label>
                <button type = "submit">add</button>
              </form>
            </div>
        )
    }
}

export default Post;
