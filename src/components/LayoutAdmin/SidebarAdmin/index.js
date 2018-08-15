import React, { Component } from 'react';
import './style.css'
import { Menu, Icon, } from 'antd';
import logoBrand from '../../../assets/logo_FGB.png'
import { Link } from 'react-router-dom';


const { SubMenu } = Menu

class SidebarAdmin extends Component {

    render() {
        return (
            <div>
                <div className="logo brand-sidebar">
                    <img src={logoBrand} alt="brand" className="logo-brand" />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="1" className="link-to">
                        <Link to="/admin">
                            <Icon type="dashboard" />
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/admin/add-admin" >
                            <Icon type="user" />
                            <span>Add Admin</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/admin/user">
                            <Icon type="mail" />
                            <span>user email</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="layout" /><span>Blog</span></span>}
                    >
                        <Menu.Item key="4">
                            <Link to="/admin/listblog">
                                <Icon type="profile" />
                                <span>List Blog</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/admin/addblog">
                                <Icon type="file-add" />
                                <span>Add Blog</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default SidebarAdmin;