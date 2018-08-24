import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

class FooterDescription extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="text-white mt-4 footer-desc-style">
                            Fullerton Global Berjangka dengan bangga menawarkan daftar produk dan layanannya kepada klien globalnya yang jumlahnya terus bertambah. Spot forex dan Derivatif tersedia untuk semua klien.
                            <br/><br/>
                            <b>Pemberitahuan Potensi Risiko:</b><br />
                            Perdagangan valuta asing dengan margin memiliki risiko yang tinggi dan untuk beberapa investor, pilihan investasi ini mungkin tidak sesuai. Potensi tinggi yang ada dapat memberikan keuntungan tetapi juga kerugian bagi anda. Sebelum memutuskan untuk terlibat dalam perdagangan valuta asing, anda disarankan untuk meneliti tujuan investasi, pengalaman dan selera risiko anda. Potensi anda akan mengalami kerugian kehilangan sebagian atau semua investasi awal akan tetap ada. Anda disarankan untuk tidak menginvestasikan dana yang penting bagi kelangsungan hidup anda. Anda sebaiknya mengetahui semua risiko terkait perdagangan valuta asing dan meminta saran dari penasehat keuangan independent.
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="footer-desc-style text-center pt-5 mb-3">
                            Copyright &copy; 2018 Fullerton Global Berjangka <br />
                            Powered by PT. Inovasi Cybertrend International
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FooterDescription;