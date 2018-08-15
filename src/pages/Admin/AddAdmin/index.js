import React, { Component } from 'react';

// child component
import FormAddAdmin from './FormAddAdmin';
import { Container, Row, Col } from 'reactstrap'
import ListAdmin from './ListAdmin';

class AddAdmin extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <FormAddAdmin />
                    </Col>
                    <Col md={8}>
                        <ListAdmin/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AddAdmin;