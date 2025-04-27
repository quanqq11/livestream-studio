'use client'; // If you are using Next.js App Router (app/ folder)

import { useRouter } from 'next/navigation'; // ✅ use next/navigation in App Router
import { Button, Card, List, Space, Typography } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

// Mock upcoming livestreams
const upcomingLivestreams = [
  {
    id: 1,
    title: 'Learn React Hooks in 30 Minutes',
    scheduledTime: '2025-05-01T20:00:00Z',
    visibility: 'Public',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'How to Build an API with NestJS',
    scheduledTime: '2025-05-03T18:30:00Z',
    visibility: 'Unlisted',
    thumbnail: 'https://via.placeholder.com/150',
  },
];

export default function UpcomingLivestream() {
  const router = useRouter();

  const handleCreate = () => {
    router.push('/livestream/setup'); // ✅
  };

  const handleEdit = (id: number) => {
    console.log('Edit upcoming livestream', id);
    // router.push(`/livestream/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    console.log('Delete upcoming livestream', id);
  };

  return (
    <div style={{ padding: 24 }}>
      <Space style={{ width: '100%', justifyContent: 'space-between', marginBottom: 24 }}>
        <Title level={2}>Upcoming Livestreams</Title>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleCreate}>
          New Livestream
        </Button>
      </Space>

      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={upcomingLivestreams}
        renderItem={(item) => (
          <List.Item>
            <Card
              cover={<img alt="thumbnail" src={item.thumbnail} />}
              actions={[
                <EditOutlined key="edit" onClick={() => handleEdit(item.id)} />,
                <DeleteOutlined key="delete" onClick={() => handleDelete(item.id)} />,
              ]}
            >
              <Title level={4}>{item.title}</Title>
              <Space direction="vertical" size={4}>
                <Text type="secondary"><ClockCircleOutlined /> {new Date(item.scheduledTime).toLocaleString()}</Text>
                <Text type="secondary">Visibility: {item.visibility}</Text>
              </Space>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

