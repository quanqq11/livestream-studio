'use client';

import LivestreamSetupForm from "@/components/ui/livestream_setup";
import { Card, Col, Form, Input, Row, Tabs, TabsProps } from "antd";
import dynamic from "next/dynamic";
// Dynamically import HLSPlayer to skip SSR
const HLSPlayer = dynamic(() => import('@/components/HLSPlayer'), {
    ssr: false,
    loading: () => <div>Loading video player...</div>,
});

export default function Home() {

    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab Pane 1',
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
    ];
    return (
        <div className="h-full grid gap-3 grid-rows-2 ">
            <Card classNames={{ body: "!p-2 !py-0" }} className="!rounded-none">
                <HLSPlayer src="http://127.0.0.1:81/hls/stream.m3u8" />
            </Card>

            <Card classNames={{ body: "!p-2 !py-0" }} className="!rounded-none">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                <Row>
                    <Col span={12}>
                        <LivestreamSetupForm/>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            autoComplete="off"
                        >
                            <div className="text-sm">
                                Stream key:
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    noStyle
                                >

                                    <Input variant="borderless" className="!border-b !rounded-none" />
                                </Form.Item>
                            </div>
                            <Form.Item
                                label="Password"
                                name="password"
                                noStyle
                            >
                                <Input.Password />
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>col-12</Col>
                </Row>

            </Card>
        </div>
    );
}



