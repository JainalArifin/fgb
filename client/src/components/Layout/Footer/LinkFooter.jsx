import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faList } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
//style
import './style.css'
class LinkFooter extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={2}>
                        <div className="footer-title">
                        QUICK LINKS
                        </div>
                        <ul className="list-link">
                            <li><Link to="/">Pilihan Produk</Link></li>
                            <li><Link to="/">Artikel</Link></li>
                            <li><Link to="/">Program Referral</Link></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <div className="footer-title">
                            TENTANG KAMI
                        </div>
                        <ul className="list-link">
                            <li><Link to="/">Broker Terbaik</Link></li>
                            <li><Link to="/">Hubungi Kami</Link></li>
                            <li><Link to="/">Event dan Promo</Link></li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <div className="footer-title">
                            LEGALITAS
                        </div>
                        <div className="footer-desc">
                            Badan Pengawas Perdagangan Berjangka Komoditi: 178/BAPPEBTI/SI/I/2003
                            <br/>
                            Bursa Berjangka Jakarta: No. SPAB-044/BBJ/03/02
                            <br />
                            Bursa Komoditi dan Derivatif Indonesia: No. 010/SPKB/ICDX/Dir/III/2010
                            <br />
                            Kliring Berjangka Indonesia: No. 14/AK-KBI/III/2003
                            <br />
                            Indonesia Clearing House: No. 003/SPKK/ISI-MIF/V/2010
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="footer-title">
                            SOCIAL MEDIA
                        </div>
                        <a>
                            <FontAwesomeIcon icon={faFacebookSquare} className="socialMedia" />
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faInstagram} className="ml-4 socialMedia" />
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LinkFooter;