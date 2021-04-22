import React, { Component } from 'react';
import axios from 'axios';

class Delete extends Component {

    state = {
        id: '',
    };

    handleChange = event => {
        this.setState({ id: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();


        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
    }

    render() {
        return (
            <div>
            <h2>Delete method</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        person ID:
                    <input type="number" name="id" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}

export default Delete;
