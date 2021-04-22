import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export class GetPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'react',
            records: [],
            record: { title: 'NA' },
        }

    }

    render() {
        return (
            <div>

                <button onClick={this.get}>get</button>
                <button onClick={this.post}>post</button>
                <button onClick={this.put}>put</button>
                {this.state.record.title}
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                </Table>
                {this.state.records.map(x => <div>

                    <Table striped bordered hover size="sm">

                        <tbody>
                            <tr>
                                <td>{x.id}</td>
                                <td>{x.title}</td>
                                <td>{x.body}</td>
                            </tr>
                        </tbody>
                    </Table>

                </div>)}



            </div>
        )
    }
    get = () => {
        axios.get('/posts')
            .then(result => {
                console.log(result.data);
                this.setState({ records: result.data });
            })
    }
    post = () => {
        axios.post('/posts', {
            title: 'prabal',
            body: 'bar',
            userId: 1
        })
            .then(result => {
                console.log(result.data);
                this.setState({ record: result.data });
            })
    }
    put = () => {
        axios.put('/posts', {
           
            body: 'foo',
            id: 101
            
        })
            .then(result => {
                console.log(result.data);
                this.setState({ record: result.data });
            })
    }

}

export default GetPost;
