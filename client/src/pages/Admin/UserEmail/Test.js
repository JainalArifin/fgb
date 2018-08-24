import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Button, Input } from 'reactstrap'
// import MailchimpSubscribe from 'react-mail'
import axios from 'axios'
import { API_SERVICE } from '../../../config/constant'

class Test extends Component {
    constructor(){
       super()
       this.state = {
           name: '',
           email: '',
           toEmail: '',
           message: ''
       }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSend = async (e) => {
        e.preventDefault()
        const { name, email, message, toEmail } = this.state
      await  axios.post(API_SERVICE.baseSendEmail, {
            name,
            email,
            message,
            toEmail,
        })
        .then(({ data })=>{
            console.log(' -------- 1')
            this.setState({
                name: '',
                email: '',
                message: '',
                toEmail: ''
            })
            console.log(data)
        })
        .catch((err)=>{
            console.log(' -------- 2')
            console.error(err)
        })
    }

    render() {
        const { email, name, message, toEmail } = this.state
        return (
            <Container>
                {/* {console.log(email, name, message, ' <----- cek isi data')} */}
                <Row>
                    <Col>
                    <Form
                        onSubmit={this.handleSend}
                    >
                    <FormGroup>
                        <Label>name</Label>
                            <Input type="text" name="name" id="exampleEmail" placeholder="with a placeholder"
                                onChange={this.handleChange}
                                value={name}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">dari Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"
                                onChange={this.handleChange}
                                value={email}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">untuk Email</Label>
                            <Input type="email" name="toEmail" id="exampleEmail" placeholder="with a placeholder"
                                onChange={this.handleChange}
                                value={toEmail}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">message</Label>
                        <Input type="textarea" name="message" id="exampleText"
                            onChange={this.handleChange}
                            value={message}
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                    >Update</Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Test;