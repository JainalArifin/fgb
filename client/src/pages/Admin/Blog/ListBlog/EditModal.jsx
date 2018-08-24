import React, { Component } from 'react';
import { Modal, Icon, Button } from 'antd'

//  edit
import { Form, FormGroup, Label, Input, Row, Col, } from 'reactstrap';
import './style.css'
// text editor
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import axios from 'axios'

const API_BLOG = `http://localhost:4000/blog`
const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class EditModal extends Component {
    constructor() {
        super()
        this.state = {
            visible: false,
            editorState: EditorState.createEmpty(),
            title: '',
            imgUrl: '',
            description: '',
            author: '',
            date: '',
            id: 0,
        }
        this.showModal = this.showModal.bind(this)
    }

    showModal = (id) => {
        // console.log(typeof id, ' <--- type')
        this.setState({
            visible: true,
        });
        axios.get(`${API_BLOG}/${id}`)
        .then(({ data })=>{
            // console.log(data)
            this.setState({
                description: data.description,
                title: data.title,
                imgUrl: data.imgToUrl,
                author: data.author,
                date: data.date,
                id: id
            })
        })
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    // edit
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    // get image
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.id, ' <---  cek id')
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

        axios.put(`${API_BLOG}/${this.state.id}`, {
            title: this.state.title,
            description: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
            imgToUrl: this.state.imgUrl,
            date: result,
            author: this.state.author,
        })
            .then(({ data }) => {
                // console.log(data)
                this.setState({
                    editorState: '',
                    title: '',
                    imgUrl: '',
                    description: '',
                    author: '',
                    date: '',
                    id: 0
                })
            })
            .catch((err) => console.error(err))
    }
    render() {
        const { editorState, title, imgUrl, date, author, description } = this.state;
        return (
            <span>
                <Button
                    type="primary" ghost
                    onClick={() => this.showModal(this.props.id)}
                >
                    <IconText type="edit" text="Edit" />
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div>
                        <Form
                            onSubmit={this.handleSubmit}
                        >
                            <FormGroup inline className="form-style-author">
                                <Row>
                                    <Col md={6}>
                                        <Label>Author</Label>
                                        <Input type="text" name="author" className="input-style-addBlog" placeholder=" ..write name author in here"
                                            value={author}
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                    <Col md={6}>
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
                </Modal>
            </span>
        );
    }
}

export default EditModal;