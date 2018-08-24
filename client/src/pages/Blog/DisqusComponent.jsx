import React, { Component } from 'react'
import Disqus from 'disqus-react';

import './style.css'

export default class DisqusComponent extends Component {

    render() {
        const disqusShortname = 'fgbfix';
        const disqusConfig = {
            // url: this.props.article.url,
            identifier: this.props.id,
            title: this.props.title,
        };
        return (
            <div className="disqus-style mt-5">
                    <div>
                        <h4>{this.props.author}</h4>
                        <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                            Comments
                        </Disqus.CommentCount>
                        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

                    </div>
            </div>
        )
    }
}