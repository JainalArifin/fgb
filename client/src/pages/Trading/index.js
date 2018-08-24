import React, { Component } from 'react';
import SpreadTrading from './SpreadTrading';

import './style.css'
class Trading extends Component {
    render() {
        return (
            <div className="tradding-style">
                <SpreadTrading />
            </div>
        );
    }
}

export default Trading;