import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

// image-icon
import iconLocation from '../../assets/icon_location.png'
import iconPhone from '../../assets/icon_phone.png'
import iconBappeti from '../../assets/partner_logo/logo-bappebti.jpg'
import iconJfx from '../../assets/partner_logo/logo-jfx.png'
import iconPtkbi from '../../assets/partner_logo/logo-ptkbi.png'

class BrandLocation extends Component {
    render() {
        return (
            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <div className="location-brand">
                            <image src={iconLocation} alt="gps-image" className="location-img" />
                            <div className="ml-2">
                                <p className="name-brand mb-1">PT. FULLERTON GLOBAL BERJANGKA</p>
                                <p className="gps-text">
                                    APL Tower Lt.21 Unit 09
                                    <br />
                                    Jl. Letjen S Parman Kav.28
                                    <br />
                                    Jakarta Barat
                                </p>
                            </div>
                        </div>
                        <div className="phone-style">
                            <img src={iconPhone} alt="phone image" className="location-img"/>
                            <div className="numberPhone-style ml-2 mt-2" >
                                <b>021-29339458</b> | FAX : <b>021-29339457</b>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="text-center">
                            <div className="style-regulation" >Under Regulation of</div>
                            <img src={iconBappeti} className="iconBappeti" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="text-center">
                            <div className="style-regulation" >Member of</div>
                            <div className="d-flex flex-row" >
                                <img src={iconJfx} className="member-icon"/>
                                <img src={iconPtkbi} className="member-icon"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BrandLocation;