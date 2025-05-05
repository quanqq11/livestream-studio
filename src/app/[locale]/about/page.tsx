'use client';

import React from 'react';
import { Layout, Typography, Row, Col, Card, Space, Divider } from 'antd';
import { TeamOutlined, AimOutlined, BulbOutlined, ThunderboltOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const AboutPage = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ backgroundColor: '#f0f5ff', borderBottom: '1px solid #d6e4ff' }}>
                <Title level={3} style={{ margin: 0, color: '#1d39c4' }}>About Soluti0n.dev</Title>
            </Header>

            <Content style={{ padding: '2rem' }}>
                <Row gutter={[32, 32]}>
                    <Col span={24}>
                        <Title level={2} style={{ color: '#1d39c4' }}>Who We Are</Title>
                        <Paragraph>
                            <Text strong>Soluti0n.dev</Text> is a livestream-focused platform designed to empower creators, educators, and enterprises to broadcast securely, reliably, and professionally.
                            Our mission is to deliver an open, customizable and developer-first solution for real-time communication and content delivery.
                        </Paragraph>
                        <Paragraph>
                            Founded in 2025, we’ve built a system that supports seamless integration with modern tools, real-time analytics, and enterprise-grade access controls.
                        </Paragraph>
                        <Divider />
                    </Col>

                    <Col span={8}>
                        <Card variant="borderless" hoverable>
                            <Space direction="vertical" size="middle">
                                <AimOutlined style={{ fontSize: 32, color: '#1d39c4' }} />
                                <Title level={4}>Our Mission</Title>
                                <Paragraph>
                                    Help teams and creators broadcast high-quality content with tools that feel natural, simple, and powerful.
                                </Paragraph>
                            </Space>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card variant="borderless" hoverable>
                            <Space direction="vertical" size="middle">
                                <BulbOutlined style={{ fontSize: 32, color: '#1d39c4' }} />
                                <Title level={4}>Our Vision</Title>
                                <Paragraph>
                                    To become the go-to open platform for corporate livestreaming and real-time digital experiences.
                                </Paragraph>
                            </Space>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card variant="borderless" hoverable>
                            <Space direction="vertical" size="middle">
                                <ThunderboltOutlined style={{ fontSize: 32, color: '#1d39c4' }} />
                                <Title level={4}>What Makes Us Unique</Title>
                                <Paragraph>
                                    Full-stack developer tools, modern UI, modular architecture, and real-time performance out of the box.
                                </Paragraph>
                            </Space>
                        </Card>
                    </Col>

                    <Col span={24}>
                        <Divider />
                        <Title level={3}>Our Team</Title>
                        <Paragraph>
                            We are a small, focused, and passionate team of developers who believe in open software and empowering digital communication.
                            Whether it’s through open source contributions, private deployment, or feature consulting — we’re here to help you succeed.
                        </Paragraph>
                        <TeamOutlined style={{ fontSize: 40, color: '#1d39c4' }} />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default AboutPage;

