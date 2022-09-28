import './login.scss';
import { Button, Checkbox, Form, Input } from 'antd';
import useStore  from '../store/index'
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd'

export default function Login() {
    const router = useNavigate()
    const { LoginStore }  = useStore()
    const onFinish = (values) => {
        LoginStore.setToken(values).then((res) => {
            console.log('执行完毕')
           
            router('/')
            notification['success']({
                message: '欢迎您！',
                description:
                  '欢迎来到React ',
            });
        })
    };
    return (
        <div className="login">
            <div className="loginForm">
                <h1>登录</h1>
                <Form
                     onFinish={ onFinish }
                     initialValues={{
                        remember: true,
                        mobile: '13811111111',
                        code: '246810'
                      }}
                >
                    <Form.Item
                        name="mobile"
                        rules={[
                          {
                            pattern: /^1[3-9]\d{9}$/,
                            message: '手机号码格式不对',
                            validateTrigger: 'onBlur'
                          },
                          { required: true, message: '请输入手机号' }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                          { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
                          { required: true, message: '请输入验证码' }
                        ]}
                    >
                        <Input  size="large" placeholder="请输入验证码" />
                    </Form.Item>
                    <Form.Item
                        name='remember'
                        valuePropName="checked"
                    >
                        <Checkbox className="login-checkbox-label">
                        我已阅读并同意「用户协议」和「隐私条款」
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                        登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}