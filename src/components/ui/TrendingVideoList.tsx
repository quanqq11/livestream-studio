'use client';

import { Card, List, Avatar } from 'antd';

const fakeVideos = [
    {
        title: '🔥 Building a Livestream Platform with React & Node.js',
        channel: 'CodeWithDev',
        views: '12K views',
        thumbnail: 'https://placehold.co/80x80',
    },
    {
        title: '🚀 Dockerizing Your Fullstack App in 10 Minutes',
        channel: 'DevOps Simplified',
        views: '9.8K views',
        thumbnail: 'https://placehold.co/80x80',
    },
    {
        title: '🎥 OBS Setup Tutorial for Streamers',
        channel: 'StreamerPro',
        views: '22K views',
        thumbnail: 'https://placehold.co/80x80',
    },
];

export default function TrendingVideoList() {
    return (
        <Card title="Trending Videos">
            <List
                itemLayout="horizontal"
                dataSource={fakeVideos}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar shape="square" size={64} src={item.thumbnail} />}
                            title={<a href="#">{item.title}</a>}
                            description={`${item.channel} • ${item.views}`}
                        />
                    </List.Item>
                )}
            />
        </Card>
    );
}

