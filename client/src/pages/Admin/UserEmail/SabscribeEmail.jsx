import React, { Component } from 'react'
import { Container, Row, Col, Card, Form,  FormGroup, Button, Label, Input} from 'reactstrap'
import axios from 'axios'

// import Mailchimp from 'mailchimp-api-v3'
// const mailchimp = new Mailchimp('dd5863cbd5198984498314f4b4949bad-us19');

// import NProgress from 'nprogress'
// import { getMaxListeners } from 'cluster';

export default class SabscribeEmail extends Component{
    onSubmit = async (e) => {
        e.preventDefault()
        let email = 'zainalrastavara@gmail.com'
        axios.post(`https://usX.api.mailchimp.com/3.0/campaigns/7f54971313/actions/send`)
        .then(({ data })=> {
            console.log('berhasil')
            console.log(data)
        })
        .catch((err)=> {
            console.error(err)
        })
        // const email = (this.emailInput && this.emailInput.value ) || null;

        // if(this.emailInput && !email) {
        //     return
        // }

        // NProgress.start();

        // try {
        //     await subscribeToNewsletter({ email })

        //     if(this.emailInput){
        //         this.emailInput = ''
        //     }
        //     NProgress.done();

        // } catch(error){
        //     console.log(error)
        //     NProgress.done();
        // }

    }

    render () {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Form
                                onSubmit={this.onSubmit}
                            >
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" required
                                        // inputRef={(elm) => {
                                        //     this.emailInput = elm
                                        // }}
                                    />
                                </FormGroup>
                                <Button
                                    type="submit"
                                >
                                    subscribe
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}