import React, { Component } from 'react';
import './style.css'
import { Card, Col, Row, Icon} from 'antd';
import axios from 'axios'
// list
import ListUser from './ListUser';
import ListBlog from './ListBlog';

const { Meta } = Card;
const API_USER = `http://localhost:4000/users`
const API_BLOG = `http://localhost:4000/blog`

class DashBoardAdmin extends Component {
    constructor(){
        super()
        this.state = {
            dataUser:[],
            dataBlog:[]
        }
    }

    getData = ()=>{
        axios.get(API_USER).then(({ data })=> this.setState({ dataUser: data }))
        axios.get(API_BLOG).then(({ data })=> this.setState({ dataBlog: data }))
    }

    componentDidMount(){
        this.getData()
    }
    render() {
        const { dataUser, dataBlog } = this.state
        return (
            <div>
                <Row gutter={16}>
                    <Col md={8} style={{ marginTop: '10px' }}>
                        <Card bordered={true} className="cardStyle-dashboard1">
                            <Meta
                                avatar={<Icon type="solution" className="icon-dashboard" />}
                                description="This is the description"
                                title={`${dataUser.length} User`}
                            />

                        </Card>
                    </Col>
                    <Col md={8} style={{ marginTop: '10px' }}>
                        <Card bordered={true} className="cardStyle-dashboard2">
                            <Meta
                                avatar={<Icon type="layout" className="icon-dashboard" />}
                                description="This is the description"
                                title={`${dataBlog.length} Blog`}
                            />

                        </Card>
                    </Col>
                </Row>
                <Row gutter={24} className="mt-5">
                    <Col md={12}>
                        <ListUser dataUser={dataUser}/>
                    </Col>
                    <Col md={12}>
                        <ListBlog dataBlog={dataBlog}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DashBoardAdmin;