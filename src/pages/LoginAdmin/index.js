import React, { Component } from 'react';
// style
import './style.css'
import { Container, Row, Col, Card , Form, FormGroup, Label, Input} from 'reactstrap'
import { Icon, Button,  Alert} from 'antd';
// get API
import axios from 'axios'
import { API_SERVICE } from '../../config/constant'
// ruter
import { Redirect } from 'react-router-dom'

class LoginAdmin extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            redirect: false,
            handleEmail: false,

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post(API_SERVICE.baseTokenURL, {
            email: this.state.email,
            password: this.state.password
        })
        .then(({ data })=>{
            console.log(data, ' <---- data')
            if(data !== 'Incorrect email or password'){
                localStorage.setItem('token', data.access_token)
                this.setState({
                    email: '',
                    password: '',
                    redirect: true,
                    handleEmail: false
                })
            }else{
                this.setState({
                    handleEmail: true
                })
            }
        })
        .catch((err)=> console.log(err))
    }

    render() {
        const { email, password, redirect, handleEmail } = this.state
        if(redirect === true){
            return <Redirect to="/admin" />
        }
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Card
                            className="login-admin p-4 shadow-lg"
                        >
                            <Form
                                onSubmit={this.handleSubmit}
                            >
                                <div className="text-center">
                                    <Icon type="user"   className="icon-login-admin"/>
                                    <p className="login-title-admin" >LOGIN</p>
                                </div>
                                {handleEmail === true && (
                                    <Alert
                                        message="Maaf"
                                        description="email dan password tidak cocok"
                                        type="error"
                                        showIcon
                                    />
                                )}
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" className="input-login-admin" placeholder="email..."
                                        name="email"
                                        onChange={this.handleChange}
                                        value={email}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" className="input-login-admin"placeholder="password ..."
                                        name="password"
                                        onChange={this.handleChange}
                                        value={password}
                                    />
                                </FormGroup>
                                <Button type="primary" icon="login" htmlType="submit" className="login-form-button" >
                                    LOGIN
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LoginAdmin;