import { Form, Input, Button, Select, Switch, DatePicker, Card } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';

const { Option } = Select;

const LivestreamSetupForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Livestream Setup Values:', values);
    // TODO: handle submit (save to database or call API)
  };

  return (
    <Card
      title={<span><VideoCameraOutlined /> Setup Livestream</span>}
      style={{ maxWidth: 600, margin: '24px auto' }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          visibility: 'public',
          allowChat: true,
        }}
      >
        {/* Livestream Title */}
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter a livestream title' }]}
        >
          <Input placeholder="Enter your livestream title" />
        </Form.Item>

        {/* Livestream Description */}
        <Form.Item
          label="Description"
          name="description"
        >
          <Input.TextArea rows={4} placeholder="Enter livestream description..." />
        </Form.Item>

        {/* Schedule Time */}
        <Form.Item
          label="Schedule"
          name="schedule"
        >
          <DatePicker showTime placeholder="Select date and time" style={{ width: '100%' }} />
        </Form.Item>

        {/* Visibility: Public, Private, Unlisted */}
        <Form.Item
          label="Visibility"
          name="visibility"
        >
          <Select>
            <Option value="public">Public</Option>
            <Option value="private">Private</Option>
            <Option value="unlisted">Unlisted</Option>
          </Select>
        </Form.Item>

        {/* Allow Live Chat */}
        <Form.Item
          label="Allow Live Chat"
          name="allowChat"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Create Livestream
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LivestreamSetupForm;

