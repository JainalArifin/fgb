import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const API_TOKEN_USER = `http://localhost:3888/auth/login`
class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            handleIncorrect: false,
            redirect: false,
            role: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        axios.post(API_TOKEN_USER, {
            email: email,
            password: password
        })
        .then(({ data })=>{
            if(data === 'Incorrect email or password'){
                this.setState({
                    password: '',
                    handleIncorrect: true
                })
            } else {
                // data.access_token
                console.log(data, ' ----- cek data')
                localStorage.setItem('token', data.access_token)
                localStorage.setItem('role', data.role)
                this.setState({
                    email: '',
                    password: '',
                    handleIncorrect: false,
                    role: data.role,
                    redirect: true,
                })
            }
            // console.log(data, ' <---- token')
        }).catch((err)=> console.error(err) )
    }
    componentDidMount(){
        this.setState({
            role: ''
        })
    }

    render() {
        const { handleIncorrect, redirect, role } = this.state
        if(redirect === true){
            console.log(role, ' <----- cek role')
            if(role === 'user biasa') {
                console.log(' <----- anehhhhhhh')
                return <Redirect to="/" />
            }
            // if(role === 'admin'){
                return <Redirect to="/admin" />
            // }
            // return
        }
        return (
            <Container className="register">
                <Row>
                    <Col md={12}>
                        <div className="text-center" >
                            <img src="https://image.flaticon.com/icons/svg/1000/1000946.svg" className="account-logo" alt="img-login"/>
                            <p className="account-register">Account / Login</p>
                        </div>
                        <Form className="register-style mt-4"
                            onSubmit={this.handleSubmit}
                        >
                            {handleIncorrect === true && (
                                <Alert color="danger" >
                                    <p>Maaf email dan password anda salah</p>
                                </Alert>
                            )}
                            <FormGroup>
                                <Label className="title-register">Email</Label>
                                <Input type="email" name="email" placeholder="email..."
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className="title-register">Password</Label>
                                <Input type="password" name="password" placeholder="password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                />
                            </FormGroup>
                            <Button block size="lg" className="btn-register"
                                type="submit"
                            >Login</Button>
                        </Form>
                        <div className="text-center">
                            <p>Belum Punya account ?
                                <Link to="/register">
                                    <b  className="have-account"> click di sini untuk Register</b>
                                </Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;