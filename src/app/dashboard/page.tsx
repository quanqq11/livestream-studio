import React from 'react';
import { Row, Col, Card, Statistic, Button, Space, Typography, Progress } from 'antd';
import { PlayCircleOutlined, StopOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';

const DashboardPage: React.FC = () => {
    return (
        <div style={{ padding: '24px' }}>
            {/* Dashboard Title */}
            <Title level={2}>Dashboard</Title>

            {/* Key Metrics */}
            <Row gutter={16}>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="Active Streams"
                            value={5}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<VideoCameraOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="Total Viewers"
                            value={2354}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<UserOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="Live Streams Today"
                            value={3}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<PlayCircleOutlined />}
                        />
                    </Card>
                </Col>
            </Row>

            {/* Live Stream Overview */}
            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={12}>
                    <Card title="Active Streams Overview">
                        <p style={{ color: '#666' }}>Track live streams happening now</p>
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <Progress percent={60} status="active" />
                            <p>Live Streams Progress</p>
                        </Space>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Recent Activity">
                        <p style={{ color: '#666' }}>View your recent live streaming activities</p>
                        <ul>
                            <li>Stream 1 started at 10:00 AM</li>
                            <li>Stream 2 started at 1:30 PM</li>
                            <li>Stream 3 ended at 5:00 PM</li>
                        </ul>
                    </Card>
                </Col>
            </Row>

            {/* Stream Management */}
            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={12}>
                    <Card title="Manage Streams">
                        <Space>
                            <Button type="primary" icon={<PlayCircleOutlined />}>Start New Stream</Button>
                            <Button type="primary" danger icon={<StopOutlined />}>End Stream</Button>
                        </Space>
                    </Card>
                </Col>
            </Row>

            {/* Quick Stats */}
            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Total Streams"
                            value={120}
                            valueStyle={{ color: '#3f8600' }}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Total Revenue"
                            value={4520}
                            valueStyle={{ color: '#3f8600' }}
                            prefix="$"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DashboardPage;

