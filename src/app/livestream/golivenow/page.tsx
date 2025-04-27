'use client'; // For Next.js App Router

import { Button, Card, Space, Typography, Spin, message } from 'antd';
import { PlayCircleOutlined, StopOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

export default function GoLiveNow() {
  const router = useRouter();

  // States for live stream status, viewer count, and loading state
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHoler] = message.useMessage()
  // Simulate the starting of the livestream
  const startLivestream = () => {
    setLoading(true);
    setTimeout(() => {
      setIsLive(true);
      setViewerCount(0); // Reset viewer count at the start
      setLoading(false);
      messageApi.success('Your livestream has started!');
    }, 1000); // Simulate delay
  };

  // Simulate stopping the livestream
  const stopLivestream = () => {
    setLoading(true);
    setTimeout(() => {
      setIsLive(false);
      setViewerCount(0);
      setLoading(false);
      messageApi.success('Your livestream has ended!');
    }, 1000); // Simulate delay
  };

  // Simulate increasing viewer count when livestream is live
  useEffect(() => {
    let interval: any;
    if (isLive) {
      interval = setInterval(() => {
        setViewerCount((prev) => prev + 1); // Increase viewers by 1 every 3 seconds
      }, 3000);
    }
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isLive]);

  return (
    <div style={{ padding: 24, maxWidth: 800, margin: '0 auto' }}>
        {contextHoler}
      <Title level={2}>Go Live Now</Title>

      <Card
        title="Stream Preview"
        extra={<Text type="secondary">Stream Status: {isLive ? 'Live' : 'Offline'}</Text>}
        style={{ marginBottom: 24 }}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          {/* Stream Title */}
          <Title level={4}>Stream Title: Awesome Live Event</Title>

          {/* Live Status and Viewer Count */}
          {loading ? (
            <Spin size="large" />
          ) : (
            <>
              <Text strong>Live Status:</Text>
              <Text type={isLive ? 'success' : 'warning'}>
                {isLive ? 'Live' : 'Offline'}
              </Text>
              <Space size="middle" style={{ marginTop: 16 }}>
                <Text>Viewer Count: {viewerCount}</Text>
              </Space>
            </>
          )}

          {/* Live Stream Actions */}
          <Space style={{ marginTop: 20 }}>
            {!isLive ? (
              <Button
                type="primary"
                icon={<PlayCircleOutlined />}
                size="large"
                onClick={startLivestream}
              >
                Start Stream
              </Button>
            ) : (
              <Button
                danger
                icon={<StopOutlined />}
                size="large"
                onClick={stopLivestream}
              >
                End Stream
              </Button>
            )}
          </Space>
        </Space>
      </Card>

      {/* Live Chat (Placeholder) */}
      {isLive && (
        <Card
          title="Live Chat"
          extra={<Text type="secondary">Viewers can interact</Text>}
        >
          <Text type="secondary">Chat feature is coming soon...</Text>
        </Card>
      )}

      {/* Go Back to Upcoming Streams */}
      <Space style={{ marginTop: 20 }}>
        <Button type="default" onClick={() => router.push('/livestream/upcoming')}>
          Back to Upcoming Streams
        </Button>
      </Space>
    </div>
  );
}

