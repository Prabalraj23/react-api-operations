import React, { Component } from 'react';
import axios from 'axios';

class Get extends Component {

    state = {
        persons : []
    };
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res =>{
            console.log(res.data);
            this.setState({persons : res.data });
        })
    }
    render() {
        return (
            <div>
            <h2>get method</h2>
               <ul>
               {this.state.persons.map(person =><li key={person.id}>{person.name}</li>)}
               </ul> 
            </div>
        )
    }
}

export default Get;
   