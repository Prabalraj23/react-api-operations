import React from 'react';

import axios from 'axios';

 class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>name:-{person.name} <br /> email:-{person.email}</li>)}
        
      </ul>
    )
  }
}
export default PersonList;