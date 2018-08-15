import React, { Component } from 'react';
import {
    Container
} from 'reactstrap'

class MapHome extends Component {
    render() {
        return (
            <Container>
                <div className="embed-responsive embed-responsive-16by9" style={{border:"10px solid #f2f2f2"}}>
                    <iframe _ngcontent-c3="" allowFullScreen="" className="embed-responsive-item" frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6684639772843!2d106.78782451532342!3d-6.1751204622317575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65f73d4c9cb%3A0x144ec1e5914e9cc3!2sAPL+Tower%2C+Tj.+Duren+Sel.%2C+Grogol+petamburan%2C+Kota+Jakarta+Barat%2C+Daerah+Khusus+Ibukota+Jakarta+11470!5e0!3m2!1sid!2sid!4v1526451748087" style={{border:0}}></iframe>
                </div>
            </Container>
        );
    }
}

export default MapHome;