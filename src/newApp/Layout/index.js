import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
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
    return (
        <>
            <Layout style={{height:"100vh"}}>
                <Header className="header" >
                    <div className="logo" style={{width:'200px'}} />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
                </Header>
                <Layout >
                    <Sider width={200} >
                        <Menu
                            theme='dark'
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1','sub2','sub3']}
                            style={{
                                height: '100%',
                                borderRight: 0,
                            }}
                            items={items2}
                        />
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
                            }}
                        >
                            Content
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