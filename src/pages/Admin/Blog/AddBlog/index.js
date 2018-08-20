import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, } from 'reactstrap';
import './style.css'
// text editor
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios'
import swal from 'sweetalert2'
//  redux
import { connect } from 'react-redux'
import { getApiBlog } from '../../../../redux/actions/blogAction'


const API_BLOG = `http://localhost:4000/blog`

class AddBlog extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        title: '',
        imgUrl: '',
        description: '',
        author: '',
        date: '',

    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    uploadImageCallBack(file) {
        return new Promise(
          (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID c6a4fa45b0c5d6a');
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
              const response = JSON.parse(xhr.responseText);
              resolve(response);
            });
            xhr.addEventListener('error', () => {
              const error = JSON.parse(xhr.responseText);
              reject(error);
            });
          }
        );
      }

    handleSubmit = (e) => {
        e.preventDefault()

        let n = this.state.date
        let change = n.split('-')
        let dateChange = ''
        switch ('08') {
            case '01':
                dateChange = 'january'
                break
            case '02':
                dateChange = 'february'
                break
            case '03':
                dateChange = 'maret'
                break
            case '04':
                dateChange = 'april'
                break
            case '05':
                dateChange = 'mei'
                break
            case '06':
                dateChange = 'juni'
                break
            case '07':
                dateChange = 'july'
                break
            case '08':
                dateChange = 'agustus'
                break
            case '09':
                dateChange = 'september'
                break
            case '10':
                dateChange = 'oktober'
                break
            case '11':
                dateChange = 'november'
                break
            default:
                dateChange = 'Desember'
                break
        }
        let result = `${dateChange} ${change[2]} ${change[0]}`

        // console.log(result, ' <---- result')

        axios.post(API_BLOG, {
            title: this.state.title,
            description: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
            imgToUrl: this.state.imgUrl,
            date: result,
            author: this.state.author,
        })
            .then(({ data }) => {
                this.props.getBlog()
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Berhasil di tambahkan',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.setState({
                    editorState: '',
                    title: '',
                    imgUrl: '',
                    description: '',
                    author: '',
                    date: '',
                })
            })
            .catch((err) => console.error(err))
    }

    render() {
        const { editorState, title, imgUrl, date, author } = this.state;
        return (
            <div>
                {/* {console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())), ' <---- test')} */}
                <Form
                    onSubmit={this.handleSubmit}
                >
                    <FormGroup inline className="form-style-author">
                        <Row>
                            <Col md={4}>
                                <Label>Author</Label>
                                <Input type="text" name="author" className="input-style-addBlog" placeholder=" ..write name author in here"
                                    value={author}
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col md={4}>
                                <Label>Date</Label>
                                <Input type="date" name="date" className="input-style-addBlog" placeholder=" ..write title in here"
                                    value={date}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" name="title" className="input-style-addBlog" placeholder=" ..write title in here"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>URL image</Label>
                        <Input type="text" name="imgUrl" className="input-style-addBlog" placeholder=" ..write url image in here"
                            value={imgUrl}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={this.onEditorStateChange}
                            className="editor-style"
                            name="editorState"
                            value={editorState}
                            toolbar={{
                                image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
                            }}

                        />
                    </FormGroup>
                    <Button color="primary" type="submit" >Add Blog</Button>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.blogReducers.blog, ' <---- blog')
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBlog: () => { dispatch(getApiBlog()) }
    }
}

const AddBlogRedux = connect(mapStateToProps, mapDispatchToProps)(AddBlog)

export default AddBlogRedux;