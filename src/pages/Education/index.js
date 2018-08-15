import React, { Component } from 'react';
import { Container } from 'reactstrap'

import ListVideo from './ListVideo';

class Education extends Component {
    render() {
        return (
            <Container className="education">
                <ListVideo />
            </Container>
        );
    }
}

export default Education;