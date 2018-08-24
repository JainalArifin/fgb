import React, { Component } from 'react';
import './style.css'
import SidebarAdmin from '../../components/LayoutAdmin/SidebarAdmin'
import { Layout, Menu, Icon } from 'antd';
import Routes from './Routes';
import { Redirect } from 'react-router-dom'

const { Header, Sider, Content } = Layout;

class AdminLayout extends Component {
    state = {
        collapsed: false,
        redirect: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    logOut = () => {
        localStorage.removeItem('token')
        this.setState({
            redirect: true
        })
    }
    render() {
        if(this.state.redirect === true){
            return <Redirect to="/admin/login" />
        }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <SidebarAdmin />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', paddingRight: '10px', marginRight: '10px', }}
                        className="header-admin"
                    >
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            style={{ cursor: 'pointer' }}
                        />
                       <span className="logout-admin"
                        onClick={this.logOut}
                       ><Icon type="logout" /> Logout</span>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {/* routing */}
                            <Routes />
                        {/* end of routing */}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default AdminLayout;