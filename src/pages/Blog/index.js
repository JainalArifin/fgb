import React, { Component } from 'react';
import ListBlog from './ListBlog';

import './style.css'

class Blog extends Component {
    render() {
        return (
            <div className="blog-style">
                <ListBlog />
            </div>
        );
    }
}

export default Blog;