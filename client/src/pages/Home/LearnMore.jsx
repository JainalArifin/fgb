import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import WomenAds from '../../assets/women-ads.png'

class LearnMore extends Component {
    render() {
        return (
            <Container className="mt-5 learning-more">
                <Row>
                    <Col md={6}>
                        <h2 className="h2Style learn-more">SUDAH SIAPKAH ANDA UNTUK TRADING?</h2>
                        <p>Cari tahu kesiapan Anda dalam berinvestasi dan jenis investasi yang cocok bagi Anda</p>
                        <Button size="lg" className="learning-button">CARI TAHU</Button>
                    </Col>
                    <Col md={6}>
                        <img src={WomenAds} className="womenAds" alt="women ads"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LearnMore;