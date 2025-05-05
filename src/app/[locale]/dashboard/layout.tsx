'use client'
import React, { ReactNode } from 'react';
import { Button, Dropdown, Flex, Input, Layout, Menu, MenuProps } from 'antd';
import { AppstoreOutlined, HistoryOutlined, HomeFilled, MailOutlined, SettingOutlined, UnorderedListOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

interface DashboardLayoutProps {
    children: ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            key: '/',
            label: 'Home',
            icon: <HomeFilled />,
        },

        {
            key: '/service',
            label: 'Services',
            icon: <UnorderedListOutlined />,
        },
        {
            key: '/schedule',
            label: 'Schedules',
            icon: <HistoryOutlined />,
        },
        {
            key: '/video',
            label: 'Videos',
            icon: <VideoCameraOutlined />,
        },


        {
            key: '/user',
            label: 'Users',
            icon: <UserOutlined />,
            children: [
                {
                    key: '/permistion',
                    label: 'Permistions',
                    icon: <HistoryOutlined />,
                },
            ]
        },
        {
            key: '/history',
            label: 'History',
            icon: <HistoryOutlined />,
        },
        {
            key: '/setting',
            label: 'Settings',
            icon: <SettingOutlined />,
        },

    ];

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    const items2: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            ),
        },
    ];


    return <>
        <Layout className="!h-screen">
            <Header className="border-b border-gray-100">
                <div className="flex h-full justify-between items-center">
                    <div>
                        <Input />
                    </div>
                    <Dropdown menu={{ items: items2 }} placement="bottomLeft">
                        <Button>dropdown</Button>
                    </Dropdown>
                </div>
            </Header>
            <Layout>
                <Sider className="border-r border-gray-200">
                    <Menu
                        className="!border-none"
                        onClick={onClick}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                    />
                </Sider>
                <Content className="h-full overflow-auto p-3">{children}</Content>
            </Layout>
        </Layout>
    </>
}

export default DashboardLayout
