"use client"
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message, Layout, Typography, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Content } = Layout;

const StreamLogin: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {
            // Replace with your login API logic
            const { username, password } = values;
            if (username === 'admin' && password === 'admin123') {
                setIsLoggedIn(true);
                message.success('Login successful!');
            } else {
                message.error('Invalid credentials!');
            }
        } catch (error) {
            message.error('Login failed!');
        } finally {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        return (
            <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                <Title level={2}>Welcome to the Stream Dashboard</Title>
                {/* Your stream dashboard or content can go here */}
            </div>
        );
    }

    return (
        <Layout style={{ height: '100vh', backgroundColor: '#f0f2f5' }}>
            <Content style={{ padding: '50px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', width: '400px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>Stream Login</Title>
                    <Form name="login" initialValues={{ remember: true }} onFinish={handleSubmit}>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Username"
                                style={{ marginBottom: '16px' }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Password"
                                style={{ marginBottom: '16px' }}
                            />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox style={{ marginBottom: '16px' }}>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading}
                                style={{ marginBottom: '16px' }}
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>

                    {/* OAuth Login Buttons */}
                    <div style={{ marginTop: '20px' }}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                            {/* Google Login Button */}
                            <Button
                                type="default"
                                block
                                style={{
                                    backgroundColor: '#4285F4',
                                    color: 'white',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    padding: '12px',
                                    marginBottom: '10px'
                                }}
                                
                            >
                                Login with Google
                            </Button>
                            
                            {/* Facebook Login Button */}
                            <Button
                                type="default"
                                block
                                style={{
                                    backgroundColor: '#3b5998',
                                    color: 'white',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    padding: '12px',
                                    marginBottom: '10px'
                                }}
                                
                            >
                                Login with Facebook
                            </Button>

                            {/* GitHub Login Button */}
                            <Button
                                type="default"
                                block
                                style={{
                                    backgroundColor: '#333',
                                    color: 'white',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    padding: '12px',
                                }}
                                
                            >
                                Login with GitHub
                            </Button>
                        </Space>
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default StreamLogin;

