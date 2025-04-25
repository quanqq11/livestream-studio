'use client'
import React, { ReactNode } from 'react';
import {  Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

interface CommonLayoutProps {
    children: ReactNode
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
    return <>
        <Layout className="h-screen">
            <Sider>
                Sider
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>
                    {children}
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </>
}

export default CommonLayout
