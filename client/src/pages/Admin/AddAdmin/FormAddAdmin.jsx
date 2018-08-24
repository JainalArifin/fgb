import React, { Component } from 'react';
// style
import './style.css'
import { Button, Icon, Alert } from 'antd'
import { Form, FormGroup, Label, Input, Card } from 'reactstrap'
import swal from 'sweetalert2'
// API
import axios from 'axios'
import { API_SERVICE } from '../../../config/constant'
// redux
import { connect } from 'react-redux'
import { getAdminApi } from '../../../redux/actions/adminAction'

class FormAddAdmin extends Component {
    constructor(){
        super()
        this.state = {
            ussername: '',
            email: '',
            password: '',
            handleKosong: false,
            handlePassword: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { ussername, email, password, handleKosong, handlePassword } = this.state
        if(ussername !== '' || email !== '' || password !== ''){
            this.setState({handleKosong: false})
            if(password.length >= 6){
                // console.log(password.length, ' <---- pass')
                axios.post(`${API_SERVICE.baseURL}/admin`, {
                    ussername: ussername,
                    email: email,
                    password: password
                })
                .then(()=> {
                    swal(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                    this.setState({
                        ussername: '',
                        email: '',
                        password: '',
                        handlePassword: false ,
                    })
                    this.props.getAdmin()
                }).catch((err) => console.log(err))
            }else{
                this.setState({ handlePassword: true })
            }
        }else{
            this.setState({
                handleKosong: true
            })
        }
    }


    render() {
        const { ussername, email, password, handleKosong, handlePassword } = this.state
        return (
            <div>
                <Card
                    className="p-3 shadow-lg"
                >
                    <Form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="text-center">
                            <Icon type="user" className="admin-user" />
                            <p className="addAccount"> ADD ADMIN </p>
                        </div>
                        { handleKosong === true && (
                            <Alert
                                message="Maaf"
                                description="input tidak boleh kosong"
                                type="error"
                                showIcon
                            />
                        )}
                        { handlePassword === true && (
                            <Alert
                                message="Maaf"
                                description="password kurang dari 6"
                                type="error"
                                showIcon
                            />
                        )}
                        <FormGroup>
                            <Label>Username</Label>
                            <Input type="text" placeholder="with a placeholder"
                                className="admin-input"
                                name="ussername"
                                onChange={this.handleChange}
                                value={ussername}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" placeholder="with a placeholder"
                                className="admin-input"
                                name="email"
                                onChange={this.handleChange}
                                value={email}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" placeholder="password placeholder"
                                className="admin-input"
                                name="password"
                                onChange={this.handleChange}
                                value={password}
                            />
                        </FormGroup>
                        <Button type="primary" htmlType="submit" className="login-form-button"
                            icon="user-add"

                        >
                            add account
                        </Button>
                    </Form>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        getAdmin: () => { dispatch(getAdminApi()) }
    }
}

const FormAminRedux = connect(mapStateToProps, mapDispatchToProps)(FormAddAdmin)

export default FormAminRedux;