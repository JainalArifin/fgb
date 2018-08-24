import React, { Component } from 'react';

import InformationAbout from './InformationAbout';
import ListAbout from './ListAbout';

import './style.css'
class About extends Component {
    render() {
        return (
            <div className="styleAbout">
                <InformationAbout />
                <div className="img-banner-about"></div>
                <ListAbout/>
            </div>
        );
    }
}

export default About;