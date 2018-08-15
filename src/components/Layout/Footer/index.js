import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap'
//style
import './style.css'
// child component
import LinkFooter from './LinkFooter';
import FooterDescription from './FooterDescription';
import FormComponent from './FormComponent';

class Footer extends Component {
    render() {
        return (
            <div className="footer-style">
                <FormComponent />
                <LinkFooter />
                <FooterDescription />
            </div>
        );
    }
}

export default Footer;