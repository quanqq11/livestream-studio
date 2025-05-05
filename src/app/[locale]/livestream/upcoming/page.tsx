'use client';

import React from 'react';
import { Card, Row, Col, Button, Typography, theme } from 'antd';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';

const streams = [
  {
    title: 'Enterprise Quarterly Report',
    description: 'Join our executive team for Q2 performance highlights.',
    date: '2025-05-10',
    time: '10:00 AM',
    thumbnail: '/images/q2-thumbnail.jpg',
  },
  {
    title: 'Product Launch: StreamX',
    description: 'Experience our newest solution for enterprise livestreaming.',
    date: '2025-05-15',
    time: '2:00 PM',
    thumbnail: '/images/streamx-launch.jpg',
  },
];

const UpcomingStreams: React.FC = () => {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();

  return (
    <div style={{ padding: 24, backgroundColor: colorBgContainer }}>
      <Typography.Title level={3}>Upcoming Streams</Typography.Title>
      <Row gutter={[24, 24]}>
        {streams.map((stream, index) => (
          <Col key={index} xs={24} md={12}>
            <Card
              hoverable
              cover={
                <img
                  alt={stream.title}
                  src={stream.thumbnail}
                  style={{ height: 200, objectFit: 'cover', borderRadius: 4 }}
                />
              }
              classNames={{ body:"p-4" }}
            >
              <Typography.Title level={4} style={{ marginBottom: 8 }}>
                {stream.title}
              </Typography.Title>
              <Typography.Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 12 }}>
                {stream.description}
              </Typography.Paragraph>
              <div style={{ marginBottom: 8 }}>
                <CalendarOutlined style={{ marginRight: 6, color: colorPrimary }} />
                <Typography.Text>{stream.date}</Typography.Text>
              </div>
              <div>
                <ClockCircleOutlined style={{ marginRight: 6, color: colorPrimary }} />
                <Typography.Text>{stream.time}</Typography.Text>
              </div>
              <div style={{ marginTop: 16 }}>
                <Button type="primary">View Details</Button>
                <Button style={{ marginLeft: 8 }}>Set Reminder</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UpcomingStreams;

