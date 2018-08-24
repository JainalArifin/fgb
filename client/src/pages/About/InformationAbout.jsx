import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

import './style.css'
class InformationAbout extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="6">
                        <h1 className="titleAbout">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        <div className="hr-about"></div>
                        <div className="about-desc1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default InformationAbout;