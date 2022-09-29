import {
    Card,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select,
    message
  } from 'antd'
  import { PlusOutlined } from '@ant-design/icons'
  import './index.scss'
  import ReactQuill from 'react-quill'
  import 'react-quill/dist/quill.snow.css'
  import useStore from '../store'
import { observer } from 'mobx-react-lite'
import { useState, useEffect } from 'react'
import { http } from '../request'
import { history } from '../utils/history'
import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

  const { Option } = Select
  
  const Publish = () => {
    const form = useRef(null)
    const [params] = useSearchParams()
    const articleId = params.get('id')
    const cacheImg = useRef()
    const onFinish = (value) => {
        const params = value
        let images = null
        if(articleId) {
          images = fileList.map(item => {
            return item.url
          })
        } else {
          images = fileList.map(item => {
            return item.response.data.url
          })
        }
         
        params.cover = {
            type: value.type,
            images: images
        }
        console.log(params);
        if(articleId){
            // 编辑
            http.put(`/mp/articles/${articleId}?draft=false`,params).then(res => {
                console.log(res)
                message.success('修改文章成功！')
                history.push('/article')
            })
          }else{
            // 新增
            http.post('/mp/articles?draft=false', params).then(res => {
                console.log(res)
                message.success('发布文章成功！')
                history.push('/article')
            })
          }
        
    }
    const [ fileList, setFileList ] = useState()
    const [ coverNum, setCoverNum ] = useState(1)
    const onUploadChange = (value) => {
        
        setFileList(value.fileList)
        cacheImg.current = value.fileList
    }
    const { ChannelStore } = useStore()
    const onChange = (e) => {
        setCoverNum(e.target.value)
        if(e.target.value === 1) {
            let img = cacheImg.current[0]?cacheImg.current[0]:''
            setFileList([img])
        } else if(e.target.value === 3){
            setFileList(cacheImg.current)
        }
    }
    useEffect(() => {
        async function getArticle () {
          const res = await http.get(`/mp/articles/${articleId}`)
        
            // 动态设置表单数据
            form.current.setFieldsValue({...res.data,type:res.data.cover.type})
            setFileList(res.data.cover.images.map(url => {
                return {
                    url
                }
            }))
            cacheImg.current = res.data.cover.images.map(url => {
              return {
                  url
              }
          })
        }
        if (articleId) {
          // 拉取数据回显
          getArticle()
        } 
    }, [articleId])
    return (
      <div className="publish">
        <Card>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ type: 1 }}
            onFinish={onFinish}
            ref={form}
          >
            <Form.Item
              label="标题"
              name="title"
              rules={[{ required: true, message: '请输入文章标题' }]}
            >
              <Input placeholder="请输入文章标题" style={{ width: 400 }} />
            </Form.Item>
            <Form.Item
              label="频道"
              name="channel_id"
              rules={[{ required: true, message: '请选择文章频道' }]}
            >
              <Select placeholder="请选择文章频道" style={{ width: 400 }}>
               
                {
                    ChannelStore.ChannelList.map(item => {
                        return  <Option  key={item.id} value={item.id}>{item.name}</Option>
                    })
                }
              </Select>
            </Form.Item>
  
            <Form.Item label="封面">
              <Form.Item name="type">
                <Radio.Group onChange={onChange}>
                  <Radio value={1}>单图</Radio>
                  <Radio value={3}>三图</Radio>
                  <Radio value={0}>无图</Radio>
                </Radio.Group>
              </Form.Item>
              {
                coverNum > 0 && (
                    <Upload
                        name="image"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList
                        action="http://geek.itheima.net/v1_0/upload"
                        fileList={fileList}
                        onChange={onUploadChange}
                        multiple={ coverNum > 1 }
                        maxCount={3} 
                    >
                        <div style={{ marginTop: 8 }}>
                        <PlusOutlined />
                        </div>
                    </Upload>
                )
              }       
            </Form.Item>
            <Form.Item
              label="内容"
              name="content"
              rules={[{ required: true, message: '请输入文章内容' }]}
            >
                <ReactQuill
                    className="publish-quill"
                    theme="snow"
                    placeholder="请输入文章内容"
                />
            </Form.Item>
  
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Space>
                <Button size="large" type="primary" htmlType="submit">
                    {articleId ? '修改文章' : '发布文章'}
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  
  export default observer(Publish) 