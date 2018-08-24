import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

import icon3 from '../../assets/why-us/icon web-03.png'
import icon4 from '../../assets/why-us/icon web-04.png'
import icon5 from '../../assets/why-us/icon web-05.png'
import icon6 from '../../assets/why-us/icon web-06.png'
import icon7 from '../../assets/why-us/icon web-07.png'
import icon8 from '../../assets/why-us/icon web-08.png'

const iconWhy = [
    {src: icon3, title: 'Legal dan Terpercaya',description: 'Broker resmi terbesar di Indonesia di bawah pengawasan BAPPEBTI'},
    {src: icon4, title: 'Rekening Terpisah', description: 'Keamanan dana nasabah terjamin dengan sistem rekening terpisah'},
    {src: icon5, title: 'Market Execution', description: 'Transaksi real-time tanpa delay dengan order market execution'},
    {src: icon6, title: 'Pencairan di Hari yang Sama', description: 'Penarikan dana lebih mudah dan cepat'},
    {src: icon7, title: 'Layanan Pelanggan 24 Jam', description: 'Tim Profesional Fullerton siap melayani Anda 24 jam sehari'},
    {src: icon8, title: 'Trending Alert di Smartphone', description: 'Dapatkan notifikasi di smartphone untuk keputusan trading lebih baik'}
]
class Whyus extends Component {
    render() {
        return (
            <Container className="mb-5">
                <Row>
                    <Col md={12}>
                        <h3 className="text-center h3Style mt-md-5 mb-md-4">MENGAPA TRADER FOREX HARUS MEMILIH FULLERTON</h3>
                    </Col>
                        {iconWhy.map((item, index) => {
                            return (
                                <Col md={4} key={index}>
                                    <div className="fitur">
                                        <img src={item.src} alt="icon" className="iconStyle"/>
                                        <div className="why-us-h3">{item.title}</div>
                                        <div className="why-us-desc">{item.description}</div>
                                    </div>
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        );
    }
}

export default Whyus;