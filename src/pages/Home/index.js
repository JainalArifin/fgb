import React, { Component } from 'react';

// child-component
import Slider from './Slider';
import Whyus from './Whyus';
import LearnMore from './LearnMore';
import MapHome from './MapHome';
import BrandLocation from './BrandLocation';


class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Whyus />
                <LearnMore />
                <MapHome />
                <BrandLocation />
            </div>
        );
    }
}

export default Home;