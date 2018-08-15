import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import imgBanner from '../../assets/banner-03.jpg'

import './style.css'
class ConnectOur extends Component {
    render() {
        return (
            <Container>
                <Row className="titleCallme">
                    <Col md={12}>
                        <h1 className="text-center connect-title" >Connect With Our</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <img src={imgBanner} className="imgBanner-callme shadow-lg" />
                    </Col>
                    <Col md={6}>
                        <p className="locationCallme"><b>Address</b></p>
                        <div className="address-callme">
                            APL Tower Lt.21 Unit 09 <br />
                            Jl. Letjen S Parman Kav.28 <br />
                            Jakarta Barat
                        </div>
                        <p className="locationCallme"><b>Phone</b></p>
                        <div className="address-callme">
                            021-29339458
                        </div>
                        <p className="locationCallme"><b>FAX</b></p>
                        <div className="address-callme">
                            021-29339457
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ConnectOur;