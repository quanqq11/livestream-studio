'use client'; // For Next.js App Router

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  Space,
  Typography,
  message,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Title } = Typography;
const { Option } = Select;

export default function StreamSettings() {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log('Stream Settings:', { ...values, thumbnail });
    message.success('Stream settings saved successfully!');
    router.push('/livestream/upcoming'); // Redirect back to upcoming livestreams
  };

  const onUpload = (info: any) => {
    if (info.file.status === 'done' || info.file.status === 'uploading') {
      setThumbnail(info.file.originFileObj);
      message.success('Thumbnail uploaded!');
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <Title level={2}>Stream Settings</Title>

      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          privacy: 'Public',
          schedule: dayjs(),
        }}
      >
        <Form.Item
          label="Stream Title"
          name="title"
          rules={[{ required: true, message: 'Please enter the stream title!' }]}
        >
          <Input placeholder="Enter stream title" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
        >
          <Input.TextArea rows={4} placeholder="Enter stream description" />
        </Form.Item>

        <Form.Item
          label="Privacy"
          name="privacy"
          rules={[{ required: true, message: 'Please select privacy!' }]}
        >
          <Select>
            <Option value="Public">Public</Option>
            <Option value="Unlisted">Unlisted</Option>
            <Option value="Private">Private</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Schedule Time"
          name="schedule"
          rules={[{ required: true, message: 'Please select scheduled time!' }]}
        >
          <DatePicker showTime style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Thumbnail"
        >
          <Upload
            beforeUpload={() => false} // Don't upload immediately
            onChange={onUpload}
            maxCount={1}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
          </Upload>
          {thumbnail && (
            <img
              src={URL.createObjectURL(thumbnail)}
              alt="Thumbnail preview"
              style={{ marginTop: 10, width: 200 }}
            />
          )}
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Save Settings
            </Button>
            <Button onClick={() => router.back()}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

