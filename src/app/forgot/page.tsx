"use client"
import React, { useState } from 'react';
import { Form, Input, Button, message, Layout, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Content } = Layout;

const ForgotPassword: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {
            // Simulate API request for password reset
            const { email } = values;
            if (email) {
                // In a real scenario, you would send a request to your backend API
                message.success('Password reset link sent to your email!');
            } else {
                message.error('Please enter a valid email address!');
            }
        } catch (error) {
            message.error('Failed to send password reset email!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout style={{ height: '100vh', backgroundColor: '#f0f2f5' }}>
            <Content style={{ padding: '50px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', width: '400px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>Forgot Password</Title>
                    <Form name="forgot-password" onFinish={handleSubmit}>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Enter your email address"
                                style={{ marginBottom: '16px' }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading}
                            >
                                Send Reset Link
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
};

export default ForgotPassword;

