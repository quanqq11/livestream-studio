'use client'
import React, { ReactNode, useState } from 'react';
import { Avatar, Button, Card, Dropdown, Input, Layout, Menu, MenuProps, Space } from 'antd';
import { CalendarOutlined, CameraOutlined, HistoryOutlined, MailOutlined, MenuOutlined, SearchOutlined, SettingOutlined, UnorderedListOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Path } from '@/enums/path';
import Link from 'next/link';
const { Header, Footer, Sider, Content } = Layout;
const { Item } = Menu
interface CommonLayoutProps {
    children: ReactNode
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            key: Path.LIVESTREAM,
            label: <Link href={Path.LIVESTREAM}>Live Streams</Link>, // Using Link for navigation
            icon: <VideoCameraOutlined />,
        },
        {
            key: Path.LIVESTREAM_UPCOMING,
            label: <Link href={Path.LIVESTREAM_UPCOMING}>Upcoming Streams</Link>, // Using Link for navigation
            icon: <UnorderedListOutlined />,
        },
        {
            key: Path.LIVESTREAM_SETTING,
            label: <Link href={Path.LIVESTREAM_SETTING}>Stream Settings</Link>, // Using Link for navigation
            icon: <SettingOutlined />,
        },
        {
            key: Path.LIVESTREAM_HISTORY,
            label: <Link href={Path.LIVESTREAM_HISTORY}>Stream History</Link>, // Using Link for navigation
            icon: <HistoryOutlined />,
        },
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
            <Header style={{ background: '#fff', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo (can be replaced with an image or brand name) */}
                    <div style={{ color: '#000', fontSize: '20px', fontWeight: 'bold', paddingLeft: '20px' }}>
                        SolutionStudio
                    </div>

                    {/* Menu */}
                    <Menu
                        onClick={onClick}
                        style={{ width: 'auto' }}
                        mode="horizontal"
                        items={items}
                    />
                </div>
            </Header>
            <Layout>
                <Sider collapsed={collapsed} theme="dark" onCollapse={(collapsed) => {
                    setCollapsed(collapsed)
                }}>

                </Sider>
                <Layout>
                    <Content className="p-3">
                        {children}
                    </Content>
                </Layout>
                <Sider>
                    <div className="flex flex-col justify-between h-full">
                        <Card
                            className="bg-slate-900 !rounded-none relative h-full"
                            classNames={{
                                header: "!py-1 !min-h-0 !px-1",
                                title: "!py-2 font-semibold text-sm",
                            }} title="Top message"

                            extra={
                                <Button type="default" size="small" icon={<MenuOutlined />} shape="circle" onClick={() => {
                                    console.log("Hello world");
                                }}></Button>
                            }
                            actions={[
                            ]}
                        >

                        </Card>

                        <Input className="!rounded-none" />
                    </div>
                </Sider>
            </Layout>

        </Layout>
    </>
}

export default CommonLayout
