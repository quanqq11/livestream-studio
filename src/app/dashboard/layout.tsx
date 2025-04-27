'use client'
import React from 'react';
import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

interface DashboardLayoutProps {

}

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
    return <>
        <Layout>
            <Header className="border-b border-gray-100">Header</Header>
            <Layout>
                <Sider>
                    Sider
                </Sider>
                <Content>Content</Content>
            </Layout>
        </Layout>
    </>
}

export default DashboardLayout
