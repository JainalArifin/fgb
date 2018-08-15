import React, { Component } from 'react';
import { List, Avatar } from 'antd';

class ListUser extends Component {
    render() {
        const { dataUser } = this.props
        return (
            <div>
                {dataUser != false && (
                <List
                    header="Data user"
                    itemLayout="horizontal"
                    dataSource={dataUser}
                    className="list-style-dashboard shadow-lg p-3"
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://image.flaticon.com/icons/svg/985/985323.svg" className="profile-img-user" />}
                                title={<span><b>Name : </b>{item.firstName}</span>}
                                description={item.email}
                                />
                        </List.Item>
                    )}
                    />
                )}
            </div>
        );
    }
}

export default ListUser;