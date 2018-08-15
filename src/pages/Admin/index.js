import React, { Component } from 'react';
import './style.css'
import SidebarAdmin from '../../components/LayoutAdmin/SidebarAdmin'
import { Layout, Menu, Icon } from 'antd';
import Routes from './Routes';

const { Header, Sider, Content } = Layout;

class AdminLayout extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
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
                    <Header style={{ background: '#fff', paddingRight: '10px', marginRight: '10px', }}>
                        <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        />
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