import 'antd/dist/reset.css'
import './globals.css'
import CommonLayout from '@/components/layouts/CommonLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning
            >
                <CommonLayout>
                    {children}
                </CommonLayout>
            </body>
        </html>
    );
}

