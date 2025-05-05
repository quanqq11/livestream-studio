'use client'
import React, { ReactNode, useState } from 'react';
import { Avatar, Button, Card, Col, Divider, Dropdown, Input, Layout, Menu, MenuProps, Row, Space, Spin } from 'antd';
import { BarChartOutlined, BookOutlined, CalendarOutlined, CameraOutlined, FacebookFilled, GithubOutlined, GlobalOutlined, HistoryOutlined, HomeOutlined, InfoCircleOutlined, LinkedinFilled, MailOutlined, MenuOutlined, PlusCircleOutlined, SearchOutlined, SettingOutlined, TwitterCircleFilled, UnorderedListOutlined, UserOutlined, VideoCameraOutlined, YoutubeFilled } from '@ant-design/icons';
import { Path } from '@/enums/path';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavigationLink from '../NavigationLink';
const { Header, Footer, Sider, Content } = Layout;
const { Item } = Menu
interface CommonLayoutProps {
    children: ReactNode
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
    const pathname = usePathname(); // Get the current pathname
    const key = pathname.replace(/^\/(en|de|vi)(\/|$)/, '/');
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            key: Path.HOME,
            label: <NavigationLink href={Path.HOME}>Home</NavigationLink>,
            icon: <HomeOutlined />,
        },
        {
            key: Path.LIVESTREAM,
            label: <NavigationLink href={Path.LIVESTREAM}>Livestream</NavigationLink>,
            icon: <VideoCameraOutlined />,
        },
        {
            key: Path.LIVESTREAM_UPCOMING,
            label: <NavigationLink href={Path.LIVESTREAM_UPCOMING}>Upcoming Streams</NavigationLink>,
            icon: <UnorderedListOutlined />,
        },

        {
            key: Path.LIVESTREAM_SETTING,
            label: <NavigationLink href={Path.LIVESTREAM_SETTING}>Stream Settings</NavigationLink>,
            icon: <SettingOutlined />,
        },
        {
            key: Path.LIVESTREAM_ANALYTICS,
            label: <NavigationLink href={Path.LIVESTREAM_ANALYTICS}>Analytics</NavigationLink>,
            icon: <BarChartOutlined />,
        }

    ];

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };


    const [collapsed, setCollapsed] = useState(true)
    const menu = (
        <Menu>
            <Item key="1">Profile</Item>
            <Item key="2">Settings</Item>
            <Item key="3">Log Out</Item>
        </Menu>
    );
    return <>
        <Layout className="h-screen">
            <Header className="border-b border-gray-100 shadown">
                <div className="container mx-auto flex justify-between h-full">
                    {/* Logo (can be replaced with an image or brand name) */}
                    <div style={{ color: '#000', fontSize: '20px', fontWeight: 'bold' }}>
                        SolutionStudio
                    </div>

                    {/* Menu */}
                    <Menu
                        onClick={onClick}
                        style={{ width: 'auto' }}
                        mode="horizontal"
                        items={items}
                        defaultSelectedKeys={[key]}
                    />
                    <div className="flex gap-2 h-full items-center">
                        <Button type="default">Register</Button>
                        <Button type="primary">Login</Button>
                    </div>
                </div>
            </Header>
            <Layout>
                <Layout>
                    <Content className="h-full overflow-auto">
                        <div className="container m-auto">
                            {children}
                        </div>
                        <Footer style={{ backgroundColor: '#0f172a', padding: '40px 20px', color: '#ffffff' }}>
                            <Row justify="space-between" align="middle" gutter={[16, 16]}>
                                {/* Brand + Description */}
                                <Col xs={24} sm={8}>
                                    <h3 style={{ color: '#ffffff', marginBottom: 8 }}>StreamEnterprise</h3>
                                    <p style={{ fontSize: 14, color: '#94a3b8' }}>
                                        Empowering secure livestreaming for modern teams and educators.
                                    </p>
                                </Col>

                                {/* Navigation Links */}
                                <Col xs={24} sm={8}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                        <a href="https://soluti0n.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                                            Soluti0n.dev
                                        </a>
                                        <a href="https://solutionedu.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                                            SolutionEdu
                                        </a>
                                        <a href="/contact" style={{ color: '#ffffff' }}>
                                            Contact Us
                                        </a>
                                        <a href="/about" style={{ color: '#ffffff' }}>
                                            About StreamEnterprise
                                        </a>
                                    </div>
                                </Col>

                                {/* CTA + Socials */}
                                <Col xs={24} sm={8} style={{ textAlign: 'right' }}>
                                    <Button type="primary" href="/livestreams" style={{ marginBottom: 12 }}>
                                        Browse Livestreams
                                    </Button>
                                    <Space size="middle">
                                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                            <GithubOutlined style={{ fontSize: 20, color: '#ffffff' }} />
                                        </a>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <LinkedinFilled style={{ fontSize: 20, color: '#ffffff' }} />
                                        </a>
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                            <YoutubeFilled style={{ fontSize: 20, color: '#ffffff' }} />
                                        </a>
                                        <a href="https://soluti0n.dev" target="_blank" rel="noopener noreferrer">
                                            <GlobalOutlined style={{ fontSize: 20, color: '#ffffff' }} />
                                        </a>
                                    </Space>
                                </Col>
                            </Row>

                            <div style={{ borderTop: '1px solid #334155', marginTop: 24, paddingTop: 12, textAlign: 'center' }}>
                                <p style={{ fontSize: 13, color: '#94a3b8' }}>
                                    © 2025 StreamEnterprise. Built with 💡 by Soluti0n.dev
                                </p>
                            </div>
                        </Footer>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </>
}

export default CommonLayout
