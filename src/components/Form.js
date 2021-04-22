import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import axios from 'axios';




export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",
        }

    }


    firstHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    lastHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    genderHandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleSubmit = (event) => {
        swal(`${this.state.firstName} ${this.state.lastName} Registered Successfully !!!`);
        this.setState = ({
            firstName: "",
            lastName: "",
            password: "",
            gender: "",
           
        })

        event.preventDefault();
        const user = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            gender:this.state.gender,

        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    



    render() {

        return (
            <div className="form">
                <h1>User Registration Form</h1>
                <label>FirstName:</label> <input type="text" value={this.state.firstName} onChange={this.firstHandler} placeholder="FirstName..." /><br />
                <label>LastName:</label> <input type="text" value={this.state.lastName} onChange={this.lastHandler} placeholder="LastName..." /><br />
                <label>Password:</label> <input type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Password..." /><br />
                <label>Gender:</label> <select onChange={this.genderHandler} defaultValue="select Gender">
                    <option defaultValue>select gender</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    
                </select><br />
                <Button type="submit" variant="success" value="Submit" onClick={this.handleSubmit}>Submit</Button>{' '}
            </div>
        )
    }
}

export default Form
