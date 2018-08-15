import React, { Component } from 'react';
import axios from 'axios'
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
    Pagination, PaginationItem, PaginationLink
} from 'reactstrap'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
// import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const API_BLOG = `http://localhost:4000/blog`
class ListBlog extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            currentPage: 1,
            listPerPage: 6,
            pageClass: 'page-item1'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            currentPage: Number(e.target.id),
            pageClass: 'page-changeColor'
        })
    }

    getData = () => {
        axios.get(API_BLOG)
            .then(({ data }) => {
                this.setState({
                    list: data
                })
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        const { list, currentPage, listPerPage, pageClass } = this.state
        // logic display list
        const indexOfLastList = currentPage * listPerPage;
        const indexOfFirstList = indexOfLastList - listPerPage;
        const currentList = list.slice(indexOfFirstList, indexOfLastList)

        const renderList = currentList.map((item, index) => {
            return (
                <Col md={4}  key={index}>
                {console.log(item.id, ' <-----')}
                    <Card className="mt-2 blog shadow" >
                        <Link
                            to={`/blog/${item.id}`}
                        >
                            <CardImg top width="100%" src={item.imgToUrl} alt="Card image cap" />
                        </Link>
                        <CardBody>
                            <CardTitle>{item.title}</CardTitle>
                            <div className="dateStyle d-flex align-items-center justify-content-between">
                                <CardSubtitle>{item.date}</CardSubtitle>
                                <Link className="more-style"
                                    to={`/blog/${item.id}`}
                                >
                                    <FontAwesomeIcon icon={faChevronCircleRight} /> more
                                </Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )
        })

        // logic for displaying page number
        const pageNumber = []
        for (let i = 1; i <= Math.ceil(list.length / listPerPage); i++) {
            pageNumber.push(i)
        }

        const renderPageNumber = pageNumber.map((number, key) => {
            return (
                <PaginationItem key={key}>
                    <PaginationLink
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                        className={pageClass}
                    >
                        {number}
                    </PaginationLink>
                </PaginationItem>
            )
        })

        return (
            <Container className="mt-5">
                <Row>
                    {renderList}
                    <Col md={12}>
                        <Pagination size="lg" className="pagination mt-5 justify-content-center">
                            {renderPageNumber}
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListBlog;