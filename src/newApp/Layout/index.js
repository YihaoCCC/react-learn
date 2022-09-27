import { HomeOutlined, DiffOutlined, EditOutlined, LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});


export default function App() {
    const route = useLocation()
    return (
        <>
            <Layout style={{height:"100vh"}}>
                <Header className="header" style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                    <div style={{width:'160px',height:'100%',color:'#fff',fontSize:'26px',fontWeight:'bolder'}} className="logo">React CMS</div>
                    <Menu  style={{width:'100%'}} theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
                </Header>
                <Layout >
                    <Sider width={200} >
                        <Menu
                            theme='dark'
                            mode="inline"
                            defaultSelectedKeys={route.pathname}
                            style={{
                                height: '100%',
                                borderRight: 0,
                            }}                         
                        >
                            <Menu.Item icon={<HomeOutlined />} key="/">
                                <Link to="/">数据概览</Link>
                            </Menu.Item>
                            <Menu.Item icon={<DiffOutlined />} key="/article">
                                <Link to="/article">内容管理</Link>
                            </Menu.Item>
                            <Menu.Item icon={<EditOutlined />} key="/publish">
                                <Link to="/publish">发布文章</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout
                        style={{
                            padding: '0 24px 24px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                borderRadius: 20,
                                background: '#FFF'
                            }}
                        >
                            <Outlet/>
                        </Content>
                        <Footer
                            style={{
                            textAlign: 'center',
                            }}
                        >
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}