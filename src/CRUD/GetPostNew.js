import React, { Component } from 'react';
import axios from 'axios';
class GetPostNew extends Component {
    constructor() {
        super();
        this.state = {
            emp: []
        }
    }
    getEmployee() {
        axios.get('https://api.mocki.io/v1/b043df5a')
            .then(res => {
                //const emps = res.data;
                //this.setState({ emps });
                console.log(res.data);
            })
    }
    componentDidMount() {
        this.getEmployee();
    }


    onSubmit() {

        const employee = {
            "name": "raj",
            "city": "cbe",
        }
        axios.post('https://api.mocki.io/v1/b043df5a', employee)
            .then(res => console.log(res.data));
    }

    update() {
        const employee = {
            "name": "prabal",
            "city": "chennai",
        }
        axios.put('https://api.mocki.io/v1/b043df5a', employee)
            .then(res => console.log(res.data));
    }
    delete() {
        axios.delete('https://api.mocki.io/v1/b043df5a')
            .then(res => console.log(res.data));
    }
    render() {
        return (
            <div>
                <button onClick={this.getEmployee}>get</button>
                <button onClick={this.onSubmit}>post</button>
                <button onClick={this.update}>update</button>
                <button onClick={this.delete}>delete</button>
            </div>

        )
    }
}

export default GetPostNew

