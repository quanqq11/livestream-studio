"use client"
import React, { useState } from 'react';
import { Form, Input, Button, Select, Slider, message, Layout, Typography } from 'antd';
import { VideoCameraOutlined, RocketOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Content } = Layout;

const StreamSetup: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [streaming, setStreaming] = useState(false);
    const [form] = Form.useForm();

    // Handle form submission to simulate saving stream settings
    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {
            // Simulate saving stream settings (e.g., API request)
            console.log(values);
            message.success('Stream settings saved!');
        } catch (error) {
            message.error('Failed to save stream settings!');
        } finally {
            setLoading(false);
        }
    };

    // Handle stream start
    const startStreaming = () => {
        setStreaming(true);
        message.success('Stream started!');
    };

    // Stop streaming
    const stopStreaming = () => {
        setStreaming(false);
        message.success('Stream stopped!');
    };

    return (
        <Layout style={{ height: '100vh', backgroundColor: '#f0f2f5' }}>
            <Content style={{ padding: '50px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', width: '500px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>Stream Setup</Title>
                    <Form
                        form={form}
                        name="stream-setup"
                        onFinish={handleSubmit}
                        layout="vertical"
                        initialValues={{
                            streamName: '',
                            platform: 'youtube',
                            resolution: '720p',
                            bitrate: 2500,
                        }}
                    >
                        <Form.Item
                            label="Stream Name"
                            name="streamName"
                            rules={[{ required: true, message: 'Please input your stream name!' }]}
                        >
                            <Input prefix={<VideoCameraOutlined />} placeholder="Enter stream name" />
                        </Form.Item>

                        <Form.Item
                            label="Stream Platform"
                            name="platform"
                            rules={[{ required: true, message: 'Please select a platform!' }]}
                        >
                            <Select placeholder="Select platform">
                                <Select.Option value="youtube">YouTube</Select.Option>
                                <Select.Option value="twitch">Twitch</Select.Option>
                                <Select.Option value="facebook">Facebook</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Resolution"
                            name="resolution"
                            rules={[{ required: true, message: 'Please select a resolution!' }]}
                        >
                            <Select>
                                <Select.Option value="480p">480p</Select.Option>
                                <Select.Option value="720p">720p</Select.Option>
                                <Select.Option value="1080p">1080p</Select.Option>
                                <Select.Option value="4k">4k</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Bitrate (kbps)"
                            name="bitrate"
                            rules={[{ required: true, message: 'Please select a bitrate!' }]}
                        >
                            <Slider
                                min={1000}
                                max={10000}
                                step={100}
                                tooltip={{ open: true }}
                                marks={{
                                    1000: '1000',
                                    5000: '5000',
                                    10000: '10000',
                                }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading}
                            >
                                Save Settings
                            </Button>
                        </Form.Item>
                    </Form>

                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        {!streaming ? (
                            <Button
                                type="primary"
                                danger
                                icon={<RocketOutlined />}
                                onClick={startStreaming}
                                block
                            >
                                Start Streaming
                            </Button>
                        ) : (
                            <Button
                                type="default"
                                icon={<RocketOutlined />}
                                onClick={stopStreaming}
                                block
                            >
                                Stop Streaming
                            </Button>
                        )}
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default StreamSetup;

