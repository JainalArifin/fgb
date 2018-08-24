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
import { connect } from 'react-redux'
import { daftarButton } from '../../../redux/actions/daftarButtonFormAction'

class FormComponent extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         hiddenButton: false
    //     }
    // }

    // handleHidden = () => {
    //     this.setState({
    //         hiddenButton: true
    //     })
    // }
    render() {
        // const { hiddenButton } = this.state
        return (
            <div className="emailStyle pt-4 pb-4 mt-2 align-item-center">
                <Container>
                    <Row>
                        <Col md={8}>
                            <h5 className="text-white font-italic mt-2 mb-0">Update terus mengenai promo, tools dan berita terbaru dari Fullerton</h5>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex justify-content-end">
                                    {this.props.buttonCondition === true ? (
                                        <Button color="secondary" size="lg" disabled
                                            className="button-terdaftar"
                                        >Anda Sudah terdaftar</Button>
                                    ): (
                                        <Form inline
                                            onSubmit={this.props.hiddenButton}
                                        >
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Input type="email" name="email" placeholder="Masukan Email Anda" className="email-input-style"
                                                    required
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                />
                                            </FormGroup>
                                            <Button className="button-daftar"
                                                type="submit"
                                            >DAFTAR</Button>
                                        </Form>
                                    )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        buttonCondition: state.daftarButton.hiddenButton
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hiddenButton: () =>{ dispatch(daftarButton()) }
    }
}

const FormComponentRedux = connect(mapStateToProps, mapDispatchToProps)(FormComponent)

export default FormComponentRedux;