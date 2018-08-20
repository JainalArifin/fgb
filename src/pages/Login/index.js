import React, { Component } from 'react';
import './style.css'
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'
import { Alert } from 'antd'
import { Link, Redirect } from 'react-router-dom'

// get API
import axios from 'axios'
import { API_SERVICE } from '../../config/constant'


const API_TOKEN_USER = `http://localhost:3888/auth/login`
class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            handleIncorrect: false,
            redirect: false,
            handleEmail: false,
            user: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password, user } = this.state

        let tmpEmial = 'kosong'
        user.map((item)=> {
            if(item.email === email){
                tmpEmial = 'ada email'
                return tmpEmial
            }
        })

        if(tmpEmial === 'kosong'){
            return this.setState({ handleEmail: true })
        }else{
                this.setState({
                    email: '',
                    password: '',
                    handleEmail: false,
                    redirect: true,
                })
        }
    }

    getData = () => {
        axios.get(`${API_SERVICE.baseURL}/users`)
        .then(({ data })=> this.setState({ user: data }) )
        .catch((err) => console.error(err))
    }

    componentDidMount(){
        this.getData()
    }

    render() {
        const { handleIncorrect, redirect, handleEmail } = this.state
        if(redirect === true){
            return <Redirect to="/" />
        }
        return (
            <Container className="register">
                {/* {console.log(this.state.user)} */}
                <Row>
                    <Col md={12}>
                        <div className="text-center" >
                            <img src="https://image.flaticon.com/icons/svg/1000/1000946.svg" className="account-logo" alt="img-login"/>
                            <p className="account-register">Account / Login</p>
                        </div>
                        <Form className="register-style mt-4"
                            onSubmit={this.handleSubmit}
                        >
                            {handleEmail === true && (
                                <Alert
                                    message="Maaf"
                                    description="Email dan Password tidak cocok"
                                    type="error"
                                    showIcon
                                />
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