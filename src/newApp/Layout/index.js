import { HomeOutlined, DiffOutlined, EditOutlined, LoginOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Popconfirm, message } from 'antd';
import React, { useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import './index.scss'
import { observer } from 'mobx-react-lite';
import useStore from '../store';
const { Header, Content, Footer, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));


function App() {
    console.log('更新了组件');
    const route = useLocation()
    const {UserStore,LoginStore} = useStore()
    const router = useNavigate() 
    useEffect(() => {
        UserStore.getUserInfo()
        console.log(UserStore.userInfo);
    },[UserStore])
    const confirm = (e) => {
        console.log(e);
        message.success('退出登录成功！');
        LoginStore.loginOut()
        router('/login')
    };  
    const cancel = (e) => {
        console.log(e);
        message.error('取消');
    };
    return (
        <>
            <Layout style={{height:"100vh"}}>
                <Header className="header" style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                    <div style={{width:'196px',height:'100%',color:'#fff',fontSize:'26px',fontWeight:'bolder'}} className="logo">React CMS</div>
                    <Menu  style={{width:'100%'}} theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
                    <div className='userInfo' >
                        {UserStore.userInfo.name || ''}
                        <img src={UserStore.userInfo.photo} alt="" />
                        <Popconfirm 
                             title="确定要退出登录吗?"
                             onConfirm={confirm}
                             onCancel={cancel}
                             okText="退出"
                             cancelText="取消"
                        >
                            <p><LoginOutlined style={{margin:'0 10px 0 0'}}/>退出登录</p>
                        </Popconfirm>
                    </div>                 
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
                            Ant Design ©2018 Created by Ant UED CYH
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}

export default observer(App)
