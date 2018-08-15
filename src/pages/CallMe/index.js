import React, { Component } from 'react';
import './style.css'
// component child
import ListCallme from './ListCallme';
import ConnectOur from './ConnectOur';


class CallMe extends Component {
    render() {
        return (
            <div>
                <div className="callmeStyle d-flex justify-content-center"></div>
                <ListCallme />
                <ConnectOur />
            </div>
        );
    }
}

export default CallMe;