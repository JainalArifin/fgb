import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import axios from 'axios';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id'
    },
    {
        title: 'Fist Name',
        dataIndex: 'firstName'
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName'
    },
    {
        title: 'Email',
        dataIndex: 'email'
    },
    {
        title: 'Date',
        dataIndex: 'date'
    },
    {
        title: 'Number Phone',
        dataIndex: 'numberPhone'
    }
]

const API_USER = `http://localhost:4000/users`
export default class UserEmail extends Component{
    constructor(){
        super()
        this.state = {
            dataUser: []
        }
    }

    getData(){
        axios.get(API_USER)
        .then(({ data })=>{
            this.setState({ dataUser: data })
        })
    }

    componentDidMount(){
        this.getData()
    }
    render() {
        const { dataUser } = this.state
        return (
            <div>
                <h2 className="title-list">Data User</h2>
                <div className="garis-bawah-list-blog"></div>
                <Table columns={columns} dataSource={dataUser} />
            </div>
        )
    }
}
