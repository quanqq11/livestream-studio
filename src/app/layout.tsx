"use client";

import 'antd/dist/reset.css';
import './globals.css';
import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import CommonLayout from '@/components/layouts/CommonLayout';
import { ConfigProvider, unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';
import { usePathname } from 'next/navigation';  // Use `usePathname` from `next/navigation`
import EmptyLayout from '@/components/layouts/EmptyLayout';

unstableSetRender((node, container: any) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();  // Get the current pathname

    // Check if the current pathname includes '/dashboard'
    const AppLayout = !pathname?.includes("/dashboard") ? CommonLayout : EmptyLayout;

    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <ConfigProvider
                    theme={{
                        components: {
                            Layout: {
                                headerBg: 'white',
                                siderBg: 'white',
                                headerPadding: 0,
                                bodyBg: "white",
                            },
                        }
                    }}
                >
                    <AntdRegistry>
                        <AppLayout>
                            {children}
                        </AppLayout>
                    </AntdRegistry>
                </ConfigProvider>
            </body>
        </html>
    );
}

