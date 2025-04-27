import React from 'react';
import { Card, Button, Row, Col, Space, Input, Typography, Carousel } from 'antd';
import { PlayCircleOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';


const livestreams = [
  {
    id: 1,
    title: 'ReactJS Masterclass - Live Coding',
    thumbnail: 'https://via.placeholder.com/400x250',
    status: 'Live',
  },
  {
    id: 2,
    title: 'How to Build a REST API with Node.js',
    thumbnail: 'https://via.placeholder.com/400x250',
    status: 'Upcoming',
  },
  {
    id: 3,
    title: 'Intro to Next.js',
    thumbnail: 'https://via.placeholder.com/400x250',
    status: 'Live',
  },
];

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '24px 0' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: '#001529', color: '#fff', padding: '50px 20px', textAlign: 'center' }}>
        <Title style={{ color: '#fff' }}>Welcome to Livestream Hub</Title>
        <p style={{ color: '#fff', fontSize: '18px' }}>
          Stream your passion or watch others' amazing streams!
        </p>
        <Space style={{ marginTop: '20px' }}>
          <Button type="primary" icon={<PlusOutlined />} size="large">
            Create a Livestream
          </Button>
        </Space>
      </div>

      {/* Featured Livestreams */}
      <div style={{ margin: '40px 0' }}>
        <Title level={3}>Featured Livestreams</Title>
        <Row gutter={[16, 16]}>
          {livestreams.map((stream) => (
            <Col span={8} key={stream.id}>
              <Card
                hoverable
                cover={<img alt="thumbnail" src={stream.thumbnail} />}
                actions={[
                  <Button
                    type="link"
                    icon={<PlayCircleOutlined />}
                    style={{ color: stream.status === 'Live' ? '#52c41a' : '#d9d9d9' }}
                  >
                    {stream.status === 'Live' ? 'Watch Now' : 'Upcoming'}
                  </Button>,
                ]}
              >
                <Title level={4}>{stream.title}</Title>
                <p style={{ color: '#999' }}>{stream.status}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Upcoming Livestreams */}
      <div style={{ margin: '40px 0' }}>
        <Title level={3}>Upcoming Livestreams</Title>
        <Row gutter={[16, 16]}>
          {livestreams
            .filter((stream) => stream.status === 'Upcoming')
            .map((stream) => (
              <Col span={8} key={stream.id}>
                <Card
                  hoverable
                  cover={<img alt="thumbnail" src={stream.thumbnail} />}
                  actions={[
                    <Button
                      type="link"
                      icon={<PlayCircleOutlined />}
                      style={{ color: '#d9d9d9' }}
                    >
                      {stream.status}
                    </Button>,
                  ]}
                >
                  <Title level={4}>{stream.title}</Title>
                  <p style={{ color: '#999' }}>{stream.status}</p>
                </Card>
              </Col>
            ))}
        </Row>
      </div>

      {/* Livestream Search */}
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <Space>
          <SearchOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <Input
            placeholder="Search Livestreams"
            style={{
              padding: '10px',
              width: '300px',
              borderRadius: '4px',
              border: '1px solid #d9d9d9',
            }}
          />
        </Space>
      </div>

      {/* Carousel for Popular Streams */}
      <div style={{ margin: '40px 0' }}>
        <Title level={3}>Popular Livestreams</Title>
        <Carousel autoplay>
          <div>
            <Card
              hoverable
              cover={<img alt="popular-stream" src="https://via.placeholder.com/800x400" />}
            >
              <Title level={4}>Stream 1</Title>
            </Card>
          </div>
          <div>
            <Card
              hoverable
              cover={<img alt="popular-stream" src="https://via.placeholder.com/800x400" />}
            >
              <Title level={4}>Stream 2</Title>
            </Card>
          </div>
          <div>
            <Card
              hoverable
              cover={<img alt="popular-stream" src="https://via.placeholder.com/800x400" />}
            >
              <Title level={4}>Stream 3</Title>
            </Card>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;

