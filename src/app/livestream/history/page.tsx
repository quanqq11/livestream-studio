'use client'; // For Next.js App Router

import { Button, Space, Table, Tag, Typography, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

// Mock data for stream history
const streamHistory = [
    {
        key: 1,
        title: 'Introduction to Node.js',
        scheduledTime: '2025-04-15T10:00:00Z',
        endTime: '2025-04-15T12:00:00Z',
        status: 'Completed',
        viewerCount: 1000,
    },
    {
        key: 2,
        title: 'Understanding TypeScript Basics',
        scheduledTime: '2025-04-18T15:00:00Z',
        endTime: '2025-04-18T17:00:00Z',
        status: 'Completed',
        viewerCount: 800,
    },
];

export default function StreamHistory() {
    const router = useRouter();

    const handleEdit = (id: number) => {
        console.log('Edit stream', id);
        // router.push(`/livestream/edit/${id}`); // Uncomment to enable editing functionality
    };

    const handleDelete = (id: number) => {
        console.log('Delete stream', id);
        message.success('Stream deleted successfully');
    };

    const columns = [
        {
            title: 'Stream Title',
            dataIndex: 'title',
            key: 'title',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Scheduled Time',
            dataIndex: 'scheduledTime',
            key: 'scheduledTime',
            render: (text: string) => new Date(text).toLocaleString(),
        },
        {
            title: 'End Time',
            dataIndex: 'endTime',
            key: 'endTime',
            render: (text: string) => new Date(text).toLocaleString(),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === 'Completed' ? 'green' : 'red'}>{status}</Tag>
            ),
        },
        {
            title: 'Viewer Count',
            dataIndex: 'viewerCount',
            key: 'viewerCount',
            render: (viewerCount: number) => <strong>{viewerCount}</strong>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: string, record: any) => (
                <Space size="middle">
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record.key)}
                        type="link"
                    >
                        Edit
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.key)}
                        danger
                        type="link"
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: 24 }}>
            <Title level={2}>Stream History</Title>

            <Table
                columns={columns}
                dataSource={streamHistory}
                pagination={false} // Disable pagination for simplicity
                rowKey="key"
                style={{ marginBottom: 24 }}
            />

            <Space style={{ marginTop: 20 }}>
                <Button type="default" onClick={() => router.push('/livestream/upcoming')}>
                    Back to Upcoming Streams
                </Button>
            </Space>
        </div>
    );
}

