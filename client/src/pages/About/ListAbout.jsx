import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

import icon3 from '../../assets/why-us/icon web-03.png'
import icon4 from '../../assets/why-us/icon web-04.png'
import icon5 from '../../assets/why-us/icon web-05.png'
import icon6 from '../../assets/why-us/icon web-06.png'
import icon7 from '../../assets/why-us/icon web-07.png'
import icon8 from '../../assets/why-us/icon web-08.png'

const list = [
    {title: "Legal dan Terpercaya", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", imgToLocal: icon3},
    {title: "Rekening Terpisah", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", imgToLocal: icon4},
    {title: "Market Execution", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", imgToLocal: icon5},
    {title: "Pencairan di Hari yang Sama", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", imgToLocal: icon6},
    {title: "Layanan Pelanggan 24 Jam", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", imgToLocal: icon7},
    {title: "Trending Alert di Smartphone", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", imgToLocal: icon8}
]

class ListAbout extends Component {
    render() {
        return (
            <Container>
                {list.map((item)=>{
                    return (
                        <Row>
                            <Col md={6}>
                                <h2 className="head-title-bout">{item.title}</h2>
                                <div className="border-bottom-title"></div>
                                <p className="desc-About">{item.desc}</p>
                            </Col>
                            <Col md={6}>
                                <div className="text-center">
                                    <img src={item.imgToLocal} className="img-fluid about" alt="img"/>
                                </div>
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        );
    }
}

export default ListAbout;