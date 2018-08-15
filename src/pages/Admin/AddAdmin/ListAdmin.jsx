import React, { Component } from 'react';
import { Table } from 'antd'
import axios from 'axios'
import { API_SERVICE } from '../../../config/constant'


const columns = [
    {
        title: 'Ussername',
        dataIndex: 'ussername',
        key: 'ussername',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }
];

class ListAdmin extends Component {
    constructor(){
        super()
        this.state = {
            listAdmin: []
        }
    }

    getData = () => {
        axios.get(`${API_SERVICE.baseURL}/admin`)
        .then(({ data })=> this.setState({ listAdmin: data }))
        .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.getData()
    }


    render() {
        const { listAdmin } = this.state
        return (
            <div className="p-3 shadow-lg">
                <h2>List admin</h2>
                <Table dataSource={listAdmin} columns={columns} />
            </div>
        );
    }
}

export default ListAdmin;