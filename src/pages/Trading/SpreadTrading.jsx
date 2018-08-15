import React, { Component } from 'react';
import { Container, Row, Col, Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import dummySpread from './dummyApiSpread'

class SpreadTrading extends Component {
    // componentDidMount(){

    // }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h1 className="head-tradding text-center">Spread Types</h1>
                        <p className="desc-tradding">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </p>
                        <p className="desc-tradding">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </p>
                        <br />
                        <br />
                        <Table striped responsive clasName="table-spread">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Variable spread</th>
                                    <th>ECN Spread</th>
                                </tr>
                            </thead>
                            {dummySpread.map((item) => {
                                return (
                                    <tbody>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.variablespread}</td>
                                        <td>{item.ecnSpread}</td>
                                    </tbody>
                                )
                            })}
                        </Table>
                        <div className="text-center">
                            <Link to="/register">
                                <Button className="btn-account">Open an Account Now</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SpreadTrading;