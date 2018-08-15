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
import swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const API_USER = `http://localhost:4000/users`
class Register extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            date: '',
            numberPhone: '',
            user: [],

            passwordHandle: false,
            handleEmail: false,
            handleKosong: false,

            redirect: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    getData = () => {
        axios.get(API_USER)
            .then(({ data }) => {
                console.log(data)
                this.setState({ user: data })
            })
    }
    componentDidMount() {
        this.getData()
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { firstName, lastName, email, password, date, numberPhone, user } = this.state
        user.map((item) => {
            if (item.email === email) {
                console.log(' email sudah di gunakan')
                return this.setState({    handleEmail: true })
            }else {
                console.log(' 1 <-------')
                this.setState({ handleEmail: false,})
                if (
                    firstName === '' || lastName === '' || email === '' || password === '' || date === '' || numberPhone === '' || user === ''
                ) {
                    console.log(' 2 <-------')
                   return this.setState({  handleKosong: true, passwordHandle: false })
                }else{
                    console.log(' 3 <-------')
                    this.setState({  handleKosong: false })
                }
                if (password.length >= 6) {
                    console.log(' 4 <-------')
                    console.log(' validasi sukses ')
                    axios.post(API_USER, {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        date: date,
                        numberPhone: numberPhone,
                        role: 'user biasa'
                    })
                        .then(() => {
                            console.log('berhasil register')
                            swal(
                                'Berhasil Register!',
                                'silahkan click button OK!',
                                'success'
                            )
                            this.setState({
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                date: '',
                                numberPhone: '',
                                user: [],

                                passwordHandle: false,
                                handleEmail: false,
                                redirect: true,
                            })
                        })
                        .catch((err) => {
                            console.error(err)
                        })
                } else {
                    console.log(' 5 <-------')
                    this.setState({
                        passwordHandle: true
                    })
                }
            }
        })
    }

    render() {
        const { passwordHandle, handleEmail, handleKosong, redirect } = this.state
        if(redirect === true){
            return <Redirect to="/" />
        }
        return (
            <Container className="register">
                <Row>
                    <Col md={12}>
                        <div className="text-center" >
                            <img src="https://image.flaticon.com/icons/svg/1000/1000946.svg" className="account-logo" alt="account" />
                            <p className="account-register">Account / Register</p>
                        </div>
                        <Form className="register-style mt-4"
                            onSubmit={this.handleSubmit}
                            >
                                {handleKosong === true && (
                                    <Alert color="danger" className="validation-style">
                                        <p> Maaf cek kembali sepertinya ada form yang belum terisi </p>
                                    </Alert>
                                )}
                                {passwordHandle === true && (
                                    <Alert color="danger" className="validation-style">
                                        <p> Maaf password sedikitnya 6 huruf atau karater </p>
                                    </Alert>
                                )}
                                {handleEmail === true && (
                                    <Alert color="danger" className="validation-style">
                                        <p>email sudah di gunakan</p>
                                    </Alert>
                                )}
                            <FormGroup>
                                <Label className="title-register">First Name</Label>
                                <Input type="text" name="firstName" placeholder="first name..."
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className="title-register">Last Name</Label>
                                <Input type="text" name="lastName" placeholder="last name..."
                                    onChange={this.handleChange}
                                    value={this.state.lastName}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className="title-register">Email</Label>
                                <Input type="email" name="email" placeholder="email..."
                                    required
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
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
                            <FormGroup>
                                <Label className="title-register">Birthday</Label>
                                <Input type="date" name="date" placeholder="date ..."
                                    onChange={this.handleChange}
                                    value={this.state.date}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className="title-register">Number Phone</Label>
                                <Input type="text" name="numberPhone" placeholder="number phone ..."
                                    onChange={this.handleChange}
                                    value={this.state.numberPhone}
                                />
                            </FormGroup>
                            <Button block size="lg" className="btn-register"
                                type="Submit"

                            >Register</Button>
                        </Form>
                        <div className="text-center">
                            <p>Sudah Punya account ?
                                <Link to="/login">
                                    <b className="have-account"> click di sini untuk login</b>
                                </Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Register;