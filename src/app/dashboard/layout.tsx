'use client'
import React from 'react';
import { Button, Dropdown, Flex, Input, Layout, Menu, MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

interface DashboardLayoutProps {

}

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            key: 'sub1',
            label: 'Navigation One',
            icon: <MailOutlined />,
        },
        {
            key: 'sub2',
            label: 'Navigation Two',
            icon: <AppstoreOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: 'sub4',
            label: 'Navigation Three',
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
                <Content>Content</Content>
            </Layout>
        </Layout>
    </>
}

export default DashboardLayout
