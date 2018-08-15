import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
);

class ListBlog extends Component {
    render() {
        const { dataBlog } = this.props
        return (
            <div>
                { dataBlog != false && (
                    <List
                        header="Data Blog"
                        itemLayout="vertical"
                        size="large"
                        className="shadow-lg p-3"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                        dataSource={dataBlog}
                        footer={<div><b>Blog </b> click page untuk melihat lebih banyak lagi </div>}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                extra={<img width={272} alt="logo" src={item.imgToUrl} className="img-blog-mobile"/>}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a>{item.title}</a>}
                                    description={item.description.substring(1, 50)}
                                />
                                {/* {item.content} */}
                            </List.Item>
                        )}
                    />
                )}
            </div>
        );
    }
}

export default ListBlog;