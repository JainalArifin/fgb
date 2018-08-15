import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Button,
    Input
} from 'reactstrap'

class FormComponent extends Component {
    render() {
        return (
            <div className="emailStyle pt-4 pb-4 mt-2 align-item-center">
                <Container>
                    <Row>
                        <Col md={8}>
                            <h5 className="text-white font-italic mt-2 mb-0">Update terus mengenai promo, tools dan berita terbaru dari Fullerton</h5>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex justify-content-end">
                                <Form inline>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Input type="email" name="email" placeholder="Masukan Email Anda" className="email-input-style"/>
                                    </FormGroup>
                                    <Button className="button-daftar">DAFTAR</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FormComponent;