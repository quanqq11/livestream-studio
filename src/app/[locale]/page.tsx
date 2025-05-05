'use client';

import React from "react";
import { Layout, Button, Card, Carousel, Collapse, List, Typography } from "antd";
import {
    VideoCameraOutlined,
    CheckCircleOutlined,
    DollarOutlined,
    LineChartOutlined,
    SafetyCertificateOutlined,
    StarOutlined,
    GlobalOutlined
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => {
    const servicePrices = [
        {
            title: "Basic Stream",
            price: "$29/month",
            description: "Ideal for small teams up to 50 viewers.",
            benefits: ["Secure streaming", "Standard resolution", "Basic analytics"],
        },
        {
            title: "Pro Stream",
            price: "$79/month",
            description: "Supports 500+ viewers, analytics included.",
            benefits: ["HD streaming", "Advanced analytics", "Audience chat & reactions"],
        },
        {
            title: "Enterprise",
            price: "Contact us",
            description: "Custom solution for large-scale organizations.",
            benefits: ["Unlimited viewers", "Dedicated support", "Private CDN & integrations"],
        }
    ];

    const results = [
        {
            icon: <LineChartOutlined className="text-green-600" />,
            text: "Over 100K hours streamed in Q1 2025.",
        },
        {
            icon: <SafetyCertificateOutlined className="text-green-600" />,
            text: "99.9% uptime guaranteed.",
        },
        {
            icon: <GlobalOutlined className="text-green-600" />,
            text: "Trusted by 50+ companies worldwide.",
        },
    ];

    const faqs = [
        {
            question: "How do I start a stream?",
            answer: "Click the 'Start Streaming' button and follow the onboarding to set up your stream key and details.",
        },
        {
            question: "Can I embed streams on my website?",
            answer: "Yes, our Pro and Enterprise plans allow iframe embedding with customization options.",
        },
        {
            question: "Is my stream secure?",
            answer: "Absolutely. All streams are encrypted and access-controlled.",
        }
    ];

    return (
        <Layout>
            <Content className="px-6 md:px-24 py-12">
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Secure & Scalable Livestreams for Enterprises</h2>
                        <p className="mb-6 text-gray-700">
                            Broadcast internal meetings, training sessions, or corporate events with ease.
                            Stream securely to your team, partners, or global audiences.
                        </p>
                        <Button type="primary" icon={<VideoCameraOutlined />} size="large">
                            Start Streaming
                        </Button>
                    </div>
                    <div>
                        <img
                            src="/lighui.png"
                            alt="Livestream illustration"
                            className=" h-[230px] rounded-lg object-cover"
                        />
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="mt-16">
                    <Title level={3}>
                        <DollarOutlined /> Service Pricing
                    </Title>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        {servicePrices.map((service, index) => (
                            <Card key={index} title={service.title} className="shadow rounded-xl">
                                <h4 className="text-xl text-blue-600 font-semibold">{service.price}</h4>
                                <p className="text-gray-600">{service.description}</p>
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <CheckCircleOutlined className="!text-green-600" /> {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Results Section */}
                <div className="mt-16">
                    <Title level={3}>
                        <StarOutlined /> Why Use Solution Studio?
                    </Title>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <Card className="shadow rounded-xl">
                            <Title level={4}>Custom Solutions</Title>
                            <Paragraph>
                                Tailored solutions for every enterprise need, ensuring seamless integration and scalability.
                            </Paragraph>
                        </Card>
                        <Card className="shadow rounded-xl">
                            <Title level={4}>Enterprise-Level Security</Title>
                            <Paragraph>
                                Solution Studio offers cutting-edge security features to protect your streams, data, and viewers.
                            </Paragraph>
                        </Card>
                        <Card className="shadow rounded-xl">
                            <Title level={4}>Dedicated Support</Title>
                            <Paragraph>
                                Receive priority support from our expert team, ensuring the highest uptime and reliability.
                            </Paragraph>
                        </Card>
                        <Card className="shadow rounded-xl">
                            <Title level={4}>Real-Time Analytics</Title>
                            <Paragraph>
                                Track your streams in real-time with advanced analytics tools for audience engagement and performance.
                            </Paragraph>
                        </Card>
                    </div>
                </div>
                {/* Results Section */}
                <div className="mt-16">
                    <Title level={3}>
                        <StarOutlined /> Why Use Solution Studio?
                    </Title>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <Card className="shadow rounded-xl">
                            <Title level={4}>Custom Solutions</Title>
                            <Paragraph>
                                Tailored solutions for every enterprise need, ensuring seamless integration and scalability.
                            </Paragraph>
                        </Card>
                        <Card className="shadow rounded-xl">
                            <Title level={4}>Enterprise-Level Security</Title>
                            <Paragraph>
                                Solution Studio offers cutting-edge security features to protect your streams, data, and viewers.
                            </Paragraph>
                        </Card>
                        <Card className="shadow rounded-xl">
                            <Title level={4}>Dedicated Support</Title>
                            <Paragraph>
                                Receive priority support from our expert team, ensuring the highest uptime and reliability.
                            </Paragraph>
                        </Card>
                        <Card className="shadow rounded-xl">
                            <Title level={4}>Real-Time Analytics</Title>
                            <Paragraph>
                                Track your streams in real-time with advanced analytics tools for audience engagement and performance.
                            </Paragraph>
                        </Card>
                    </div>
                </div>
                {/* FAQ Section */}
                <div className="mt-16">
                    <Title level={3}>
                        <VideoCameraOutlined /> Frequently Asked Questions
                    </Title>
                    <Collapse
                        accordion
                        className="mt-4"
                        items={faqs.map((faq, index) => ({
                            key: index.toString(),
                            label: faq.question,
                            children: <Paragraph>{faq.answer}</Paragraph>,
                        }))}
                    />
                </div>
            </Content>
        </Layout>
    );
};

export default HomePage;

