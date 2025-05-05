"use client"
import { useState } from 'react';
import { Card, Form, Input, Switch, Button, List, Row, Col, Typography, Avatar, Space } from 'antd';
import HLSPlayer from '@/components/HLSPlayer';

const { Title } = Typography;

export default function LivestreamPage() {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const handleSendChat = () => {
        if (input.trim()) {
            setMessages(prev => [...prev, `🧑 You: ${input}`]);
            setInput('');
        }
    };

    const dummyStreams = [
        { id: 1, name: 'Cooking Show 🍳', views: 124, thumbnail: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Coding Live 💻', views: 88, thumbnail: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Gaming 🎮', views: 210, thumbnail: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="h-full px-4 py-4 space-y-4 max-w-screen-xl mx-auto">
            {/* Event Details */}
            <Card className="mb-4">
                <p><strong>Event:</strong> Product Launch</p>
                <p><strong>Time:</strong> 3:00 PM | <strong>Speaker:</strong> John Doe</p>
                <p><strong>Topic:</strong> The Future of Tech</p>
                <p><strong>Access Code:</strong> ABC123</p>
            </Card>

            {/* Video & Stats */}
            <Row gutter={16} className="mb-4">
                <Col xs={24} md={16}>
                    <Card>
                        <HLSPlayer src="http://127.0.0.1:81/hls/stream.m3u8" />
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card>
                        <p><strong>Viewers:</strong> 234</p>
                        <p><strong>Comments:</strong> 56</p>
                        <p><strong>Status:</strong> Live</p>
                    </Card>
                </Col>
            </Row>

            {/* Live Chat */}
            <Card title="💬 Live Chat & Q&A" className="mb-4">
                <div className="overflow-y-auto max-h-64 mb-2">
                    <List
                        size="small"
                        dataSource={messages}
                        renderItem={(item, index) => (
                            <List.Item key={index}>{item}</List.Item>
                        )}
                    />
                </div>
                <Space.Compact >
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onPressEnter={handleSendChat}
                        style={{ width: 'calc(100% - 80px)' }}
                        placeholder="Type message"
                    />
                    <Button type="primary" onClick={handleSendChat}>Send</Button>
                </Space.Compact>
            </Card>

            {/* Related Streams */}
            <Card title="📺 Other Live Streams" className="mb-4">
                <Row gutter={16}>
                    {dummyStreams.map(stream => (
                        <Col key={stream.id} xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                cover={<img src={stream.thumbnail} alt={stream.name} />}
                            >
                                <Card.Meta
                                    avatar={<Avatar>{stream.name.charAt(0)}</Avatar>}
                                    title={stream.name}
                                    description={`${stream.views} viewers`}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card>

            {/* Footer */}
            <footer className="mt-4">
                <p>🔒 Security | 📞 Contact Us | 🌐 Website | 📧 Email</p>
            </footer>
        </div>
    );
}


//'use client';
//
//import LivestreamSetupForm from "@/components/ui/livestream_setup";
//import { Card, Col, Form, Input, Row, Tabs, TabsProps } from "antd";
//import dynamic from "next/dynamic";
//// Dynamically import HLSPlayer to skip SSR
//const HLSPlayer = dynamic(() => import('@/components/HLSPlayer'), {
//    ssr: false,
//    loading: () => <div>Loading video player...</div>,
//});
//
//export default function Home() {
//
//    return (
//        <div className="h-full grid gap-3 grid-rows-2 ">
//            <Card classNames={{ body: "!p-2 !py-0" }} className="!rounded-none">
//                <HLSPlayer src="http://127.0.0.1:81/hls/stream.m3u8" />
//            </Card>
//        </div>
//    );
//}
//
//
//
