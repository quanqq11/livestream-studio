'use client'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function AntdLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="h-screen">
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

