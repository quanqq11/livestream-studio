'use client'
import React, { ReactNode, useState } from 'react';
import { Avatar, Button, Card, Dropdown, Input, Layout, Menu, MenuProps, Space } from 'antd';
import { BarChartOutlined, CalendarOutlined, CameraOutlined, HistoryOutlined, HomeOutlined, MailOutlined, MenuOutlined, PlusCircleOutlined, SearchOutlined, SettingOutlined, UnorderedListOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
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
                        <Footer style={{ textAlign: 'center' }}>
                            StreamEnterprise ©2025 - Empowering Secure Corporate Broadcasting
                        </Footer>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </>
}

export default CommonLayout
