import React, { Component } from 'react';
import './style.css'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios';

import DisqusComponent from './DisqusComponent';

// draft js

const API_BLOG = `http://localhost:4000/blog`
class DetailBlog extends Component {
    constructor(){
        super()
        this.state = {
            listData: {}
        }
    }
    getParams = () => {
        // axios.get
        const { match: { params } } = this.props
        axios.get(`${API_BLOG}/${params.id}`)
        .then(({ data })=> {
            // console.log(data, ' <---- data')
            this.setState({
                listData: data
            })
        })
        .catch((err) => { console.log(err) })
    }
    componentDidMount(){
        this.getParams()
    }
    render() {
        const { listData } = this.state
        return (
            <Container className="detailStyle mb-5">
                <Row>
                    <Col md={4}>
                        <div className="date-detail"><b>{listData.date}</b></div>
                        <h1 className="title-detail titleStyle">{listData.title}</h1>
                        <div className="d-flex  align-items-center">
                            <div className="img-style-parrent">
                                <img src="https://image.flaticon.com/icons/svg/149/149072.svg" className="img-profile-detail img-circle shadow" alt="icon" />
                            </div>
                            <p className="author-detail ml-4"> Writen by <b>{listData.author}</b></p>
                        </div>
                    </Col>
                    <Col md={8}>
                        <img className="img-fluid img-detail shadow-lg mt-3" src={listData.imgToUrl} alt="img-detail"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="mt-5">
                        <div className="desc">
                            <h1 className="title-detail mb-3  titleStyle">{listData.title}</h1>
                            {/* <p className="detail-desc">{listData.description}</p> */}
                            {/* <p>{{__html: listData.description}}</p> */}
                            <td dangerouslySetInnerHTML={{__html: listData.description}}
                                className="text-desc"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <DisqusComponent
                            author={listData.author}
                            title={listData.title}
                            id={listData.id}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DetailBlog;