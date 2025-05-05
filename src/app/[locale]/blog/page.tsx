'use client';

import React from 'react';
import { Layout, Typography, List, Card, Tag, Space } from 'antd';
import { EyeOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

// Dummy blog data
const posts = [
  {
    title: 'Getting Started with Live Streaming',
    description: 'Learn how to set up your first livestream with our simple guide.',
    date: '2025-05-01',
    time: '14:30',
    status: 'Published',
    viewers: 1200,
    subject: 'Streaming Basics',
  },
  {
    title: 'Top 5 Streaming Tools in 2025',
    description: 'A rundown of the most popular streaming software and tools for professionals.',
    date: '2025-04-28',
    time: '09:00',
    status: 'Draft',
    viewers: 340,
    subject: 'Tools & Reviews',
  },
  {
    title: 'Behind the Scenes: Building Soluti0n.dev',
    description: 'An inside look at the development of our full-stack livestream platform.',
    date: '2025-04-15',
    time: '19:45',
    status: 'Published',
    viewers: 890,
    subject: 'Devlog',
  },
];

const statusColorMap: Record<string, string> = {
  Published: 'blue',
  Draft: 'orange',
  Archived: 'red',
};

const subjectColor = 'blue';

const BlogPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#f0f5ff', borderBottom: '1px solid #d6e4ff' }}>
        <Title level={3} style={{ margin: 0, color: '#1d39c4' }}>Soluti0n.dev Blog</Title>
      </Header>

      <Content style={{ padding: '2rem' }}>
        <Title level={2} style={{ color: '#1d39c4' }}>Latest Articles</Title>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={posts}
          renderItem={(post) => (
            <List.Item>
              <Card
                title={
                  <Space direction="vertical">
                    <Text strong>{post.title}</Text>
                    <Space size="middle">
                      <Tag color={statusColorMap[post.status]}>{post.status}</Tag>
                      <Tag color={subjectColor}>{post.subject}</Tag>
                    </Space>
                  </Space>
                }
              >
                <Paragraph>{post.description}</Paragraph>
                <Space direction="horizontal" size="large">
                  <Text type="secondary">
                    <ClockCircleOutlined /> {post.date} at {post.time}
                  </Text>
                  <Text type="secondary">
                    <EyeOutlined /> {post.viewers} viewers
                  </Text>
                </Space>
              </Card>
            </List.Item>
          )}
        />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        ©2025 StreamEnterprise Blog. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default BlogPage;

