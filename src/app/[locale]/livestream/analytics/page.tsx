// app/livestream/analytics/page.tsx (or pages/livestream/analytics.tsx)
'use client';

import React from 'react';
import { Card, Col, Row, Typography, Table, DatePicker, theme } from 'antd';
import {
  EyeOutlined,
  VideoCameraOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { Line } from '@ant-design/charts';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

const stats = [
  {
    title: 'Total Views',
    icon: <EyeOutlined />,
    value: 12000,
  },
  {
    title: 'Total Streams',
    icon: <VideoCameraOutlined />,
    value: 34,
  },
  {
    title: 'Avg. Watch Time',
    icon: <ClockCircleOutlined />,
    value: '12m 45s',
  },
];

const chartData = [
  { date: '2025-05-01', views: 1200 },
  { date: '2025-05-02', views: 1400 },
  { date: '2025-05-03', views: 1800 },
  { date: '2025-05-04', views: 1000 },
  { date: '2025-05-05', views: 1700 },
];

const columns = [
  {
    title: 'Stream Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Views',
    dataIndex: 'views',
    key: 'views',
  },
  {
    title: 'Avg. Watch Time',
    dataIndex: 'watchTime',
    key: 'watchTime',
  },
];

const dataSource = [
  {
    key: '1',
    title: 'Q2 Report Launch',
    date: '2025-05-01',
    views: 3000,
    watchTime: '10m 20s',
  },
  {
    key: '2',
    title: 'Product Deep Dive',
    date: '2025-05-03',
    views: 2200,
    watchTime: '15m 30s',
  },
];

const LivestreamAnalytics: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Livestream Analytics</Title>

      {/* Date Filter */}
      <div style={{ marginBottom: 24 }}>
        <Text strong>Select Date Range:</Text>
        <RangePicker style={{ marginLeft: 12 }} />
      </div>

      {/* Stats Cards */}
      <Row gutter={[16, 16]}>
        {stats.map((stat, index) => (
          <Col xs={24} md={8} key={index}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontSize: 24, color: token.colorPrimary }}>
                  {stat.icon}
                </div>
                <div>
                  <Text type="secondary">{stat.title}</Text>
                  <br />
                  <Text strong style={{ fontSize: 18 }}>
                    {stat.value}
                  </Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Chart */}
      <Card title="Viewers Over Time" style={{ marginTop: 24 }}>
        <Line
          data={chartData}
          xField="date"
          yField="views"
          height={300}
          autoFit
          smooth
          point={{ size: 5 }}
        />
      </Card>

      {/* Table */}
      <Card title="Past Stream Performance" style={{ marginTop: 24 }}>
        <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
      </Card>
    </div>
  );
};

export default LivestreamAnalytics;

