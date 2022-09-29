import { HomeOutlined, DiffOutlined, EditOutlined, LoginOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Popconfirm, message } from 'antd';
import React, { useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import './index.scss'
import { observer } from 'mobx-react-lite';
import useStore from '../store';
import { useState, memo } from 'react';
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));


function App() {   
    const route = useLocation()
    const [currentRoute, setCurrentRoute] = useState('主页')
    useEffect(() => {
        if(route.pathname === '/article') {
            setCurrentRoute('系统文章内容管理')    
        } else if(route.search.length>0) {
            setCurrentRoute('编辑文章')
        }
        else if(route.pathname === '/publish'){
            setCurrentRoute('发布文章')
        }  else {
            setCurrentRoute('系统主页')
        }
    },[route.pathname])
    const {UserStore,LoginStore, ChannelStore} = useStore()
    const router = useNavigate() 
    useEffect(() => {
        UserStore.getUserInfo()
        ChannelStore.getChannelList()
    },[UserStore,ChannelStore])
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
                            selectedKeys={route.pathname}
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
                            <Breadcrumb.Item>React</Breadcrumb.Item>
                            <Breadcrumb.Item>{currentRoute}</Breadcrumb.Item>
                            
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                borderRadius: 20,
                                background: '#FFF',
                                overflow: 'auto'
                            }}
                        >
                            <Outlet/>
                        </Content>
                       
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}

export default memo(observer(App))
