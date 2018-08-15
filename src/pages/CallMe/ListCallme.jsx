import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'reactstrap'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faComments } from '@fortawesome/free-solid-svg-icons'
// import { faMessa } from '@fortawesome/free-brands-svg-icons'

class ListCallme extends Component {
    render() {
        return (
            <Container>
                <Row className="listStyleCallMe align-items-end">
                    <Col md={6}  className="Hubungi-Kami">
                       <Card className="text-center text-body shadow p-4 card-callMe" >
                            <FontAwesomeIcon icon={faPhone} className="text-center text-dark"/>
                            <p className="title-callMe text-dark">Hubungi Kami</p>
                            <p className="callMe-desc"><smal>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</smal></p>
                            <p>021-29339458</p>
                       </Card>
                    </Col>
                    <Col md={6} className="kirimPesan-style" >
                       <Card className="text-center text-body  shadow p-4 card-callMe">
                            <FontAwesomeIcon icon={faComments} className="text-center text-dark"/>
                            <p className="title-callMe text-dark">Kirim Pesan</p>
                            <p  className="callMe-desc"><smal>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</smal></p>
                            <Button className="btn-callMe">Send Message</Button>
                       </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListCallme;