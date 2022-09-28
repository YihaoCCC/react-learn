import { Link } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Table, Tag, Space } from 'antd'
import {  DeleteOutlined, EditOutlined } from '@ant-design/icons';
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import './index.scss'


import { useState, useEffect } from 'react'
import { http } from '../request';

const { Option } = Select
const { RangePicker } = DatePicker
const onFinish = (value) => {
    console.log(value);
}
const Article = () => {
    const img404 = 'https://135.com/cn/123123,png'
    // 获取频道列表
    const [channels, setChannels] = useState([])
    async function fetchChannels() {
        const res = await http.get('/channels')
        setChannels(res.data.channels)
    }
    useEffect(() => {
        fetchChannels()
    }, [])

    // 文章列表数据管理
    const [article, setArticleList] = useState({
        list: [],
        count: 0
    })

    // 参数管理
    const [params, setParams] = useState({
        page: 1,
        per_page: 10
    })
    // async function fetchArticleList() {
    //     const res = await http.get('/mp/articles', { params })
    //     const { results, total_count } = res.data
    //     setArticleList({
    //       list: results,
    //       count: total_count
    //     })
    //   }
    useEffect(() => {
        async function fetchArticleList() {
            const res = await http.get('/mp/articles', { params })
            const { results, total_count } = res.data
            setArticleList({
              list: results,
              count: total_count
            })
          }
        fetchArticleList()
    }, [params])
    const columns = [
        {
          title: '封面',
          dataIndex: 'cover',
          width:120,
          render: cover => {
            return <img src={cover || img404} width={80} height={60} alt="" />
          }
        },
        {
          title: '标题',
          dataIndex: 'title',
          width: 220
        },
        {
          title: '状态',
          dataIndex: 'status',
          render: data => <Tag color="green">审核通过</Tag>
        },
        {
          title: '发布时间',
          dataIndex: 'pubdate'
        },
        {
          title: '阅读数',
          dataIndex: 'read_count'
        },
        {
          title: '评论数',
          dataIndex: 'comment_count'
        },
        {
          title: '点赞数',
          dataIndex: 'like_count'
        },
        {
          title: '操作',
          render: data => {
            return (
              <Space size="middle">
                <Button type="primary" shape="circle" icon={<EditOutlined />} />
                <Button
                  type="primary"
                  danger
                  shape="circle"
                  icon={<DeleteOutlined />}
                />
              </Space>
            )
          }
        }
      ]
    
      const data = [
          {
              id: '8218',
              comment_count: 0,
              cover: {
                images:['http://geek.itheima.net/resources/images/15.jpg'],
              },
              like_count: 0,
              pubdate: '2019-03-11 09:00:00',
              read_count: 2,
              status: 2,
              title: 'wkwebview离线化加载h5资源解决方案' 
          }
      ]
  return (
    <div>
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>内容管理</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: 9 }} onFinish={onFinish}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={9}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              style={{ width: 120 }}
            >
              {
                channels.map((item,index) => {
                    return <Option key={item.id} value={item.id}>{item.name}</Option>
                })
              }
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title={`根据筛选条件共查询到 count 条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={data} />
      </Card>
    </div>
  )
}

export default Article