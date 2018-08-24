import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import './style.css'
// api dumy
import videosPlay from './videoAPi.js'

class ListVideo extends Component {
    constructor() {
        super()
        this.state = {
            dataEducation: []
        }
    }
    getData = () => {
        this.setState({
            dataEducation: videosPlay
        })
    }

    componentDidMount() {
        this.getData()
    }
    render() {
        const { dataEducation } = this.state
        return (
            <div>
                {/* play start */}
                {dataEducation.map((item, index) => {
                    return (
                        <div className="">
                            <Row>
                                <Col md={12}>
                                    <Video
                                        key={index}
                                        className="mt-2 shadow-lg videoStyle"
                                        autoPlay={false}
                                        loop muted
                                        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                        poster="http://sourceposter.jpg"
                                        onCanPlayThrough={() => {
                                            // Do stuff
                                        }}>
                                        <source src={item.videoToUrl} type="video/webm" />
                                        <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
                                    </Video>
                                    <div className="text-center">
                                        <h1 className="video-title">{item.title}</h1>
                                        <p>{item.desc}</p>
                                        <div className="desc-video"></div>
                                    </div>
                                </Col>
                                {/* <Col md={6}>
                                </Col> */}
                            </Row>
                        </div>
                    )
                })}
                {/* play end of */}
            </div>
        );
    }
}

export default ListVideo;