import React, { Component } from 'react';
import './style.css';
import { Row, Col } from 'reactstrap'
import { List, Icon } from 'antd';
import axios from 'axios'
import EditModal from './EditModal';

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

const API_BLOG = `http://localhost:4000/blog`
class ListBlog extends Component {
    constructor() {
        super()
        this.state = {
            listBlog: []
        }
        this.getData = this.getData.bind(this)
        this.hendleDelete = this.hendleDelete.bind(this)
    }
    getData = () => {
        axios.get(API_BLOG)
            .then(({ data }) => {
                this.setState({
                    listBlog: data
                })

            })
    }
    hendleDelete = (id) => {
        axios.delete(`${API_BLOG}/${id}`)
            .then(() => {
                this.getData()
                // console.log('sukses')
            })
            .catch((err) => console.log(err))
    }
    componentDidMount() {
        this.getData()
    }
    // method for modal



    render() {
        const { listBlog } = this.state
        return (
            <div>
                <h2 className="title-list">List Blog</h2>
                <div className="garis-bawah-list-blog"></div>
                <Row>
                    <Col md={8}>
                        <List
                            className="p-4 shadow-lg"
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
                            dataSource={listBlog}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    extra={<img width={272} alt="logo" src={item.imgToUrl} className="img-responsive-detail-blog" />}

                                >
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p><b>{item.date}</b></p>
                                    </div>
                                    <div className="icon-edit-delete">
                                        <span
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <EditModal id={item.id} />
                                        </span>
                                        <span className="ml-5"
                                            onClick={() => this.hendleDelete(item.id)}
                                            style={{ cursor: 'pointer' }}
                                        ><IconText type="delete" text="Delete" /> </span>
                                    </div>
                                    {/* {item.content} */}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default ListBlog;