// app/livestream/page.tsx (or pages/livestream.tsx)
'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Row, Col, Card, Typography, Input, Button, List, message, Divider } from 'antd';
import { VideoCameraOutlined, MessageOutlined, EyeOutlined } from '@ant-design/icons';
import io from 'socket.io-client';

// Dynamic import for HLS video player
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const { Title, Text } = Typography;
const { TextArea } = Input;

// Socket.io client connection
const socket = io('http://localhost:5000');  // Your server URL here

const LivestreamPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [viewers, setViewers] = useState<number>(0);

  useEffect(() => {
    // Listen for new chat messages
    socket.on('chatMessage', (msg: string) => {
      setChatMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Listen for viewer count updates
    socket.on('viewerCount', (count: number) => {
      setViewers(count);
    });

    return () => {
      socket.off('chatMessage');
      socket.off('viewerCount');
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      socket.emit('sendMessage', newMessage);
      setNewMessage('');
    } else {
      message.warning('Please enter a message.');
    }
  };

  return (
    <div style={{ padding: '32px 24px', background: '#ffffff' }}>
      <Title level={3} >Livestream: Enterprise Product Launch</Title>

      <Row gutter={[24, 24]} justify="center">
        {/* Left Column: Video Player */}
        <Col xs={24} md={16}>
          <Card
            style={{ borderRadius: 12, overflow: 'hidden' }}
            cover={
              <ReactPlayer
                url="https://path-to-your-hls-stream.m3u8" // Replace with actual HLS stream URL
                playing={true}
                controls
                width="100%"
                height="100%"
                style={{ borderRadius: 12 }}
              />
            }
            title="Live Stream"
            extra={<VideoCameraOutlined />}
            classNames={{ body:"p-4" }}
          >
            <Text strong style={{ fontSize: 16, display: 'block', marginBottom: 12, color: '#333' }}>Total Viewers: {viewers}</Text>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text type="secondary" style={{ fontSize: 14, color: '#666' }}>Join the conversation below</Text>
              <Button type="primary" shape="round" size="middle" icon={<MessageOutlined />} style={{ backgroundColor: '#1E90FF', borderColor: '#1E90FF' }}>Chat</Button>
            </div>
          </Card>
        </Col>

        {/* Right Column: Widgets + Chat */}
        <Col xs={24} md={8}>
          <Row gutter={[16, 16]}>
            {/* Widget: Real-time Stats */}
            <Col span={24}>
              <Card
                title="Live Stats"
                extra={<EyeOutlined />}
                style={{ borderRadius: 12 }}
              >
                <Text type="secondary" style={{ display: 'block', marginBottom: 8, color: '#666' }}>Viewer Count</Text>
                <Title level={3} style={{ color: '#1E90FF' }}>{viewers}</Title>
              </Card>
            </Col>

            {/* Widget: Chat */}
            <Col span={24}>
              <Card
                title="Live Chat"
                extra={<MessageOutlined />}
                style={{ borderRadius: 12 }}
              >
                <div style={{ maxHeight: 300, overflowY: 'auto', marginBottom: 12 }}>
                  <List
                    dataSource={chatMessages}
                    renderItem={(msg, index) => (
                      <List.Item key={index} style={{ marginBottom: 8 }}>
                        <Text>{msg}</Text>
                      </List.Item>
                    )}
                  />
                </div>

                {/* Message Input */}
                <TextArea
                  rows={3}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  style={{ marginBottom: 12, borderRadius: 8, borderColor: '#1E90FF' }}
                />
                <Button
                  type="primary"
                  onClick={handleSendMessage}
                  style={{
                    width: '100%',
                    borderRadius: 8,
                    fontSize: 16,
                    padding: '8px 0',
                    backgroundColor: '#1E90FF',
                    borderColor: '#1E90FF',
                  }}
                >
                  Send Message
                </Button>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider style={{ marginTop: 32 }} />

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Text type="secondary" style={{ color: '#666' }}>Powered by Livestream Co. | All rights reserved.</Text>
      </div>
    </div>
  );
};

export default LivestreamPage;

