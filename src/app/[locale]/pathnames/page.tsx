import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, use } from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
    params: Promise<{ locale: Locale }>;
};

const PathnamesPage: React.FC<Props> = ({ params }) => {
    const { locale } = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('PathnamesPage');

    return (
        <PageLayout title={t('title')}>
            <div className="max-w-[490px]">
                {t.rich('description', {
                    p: (chunks: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => <p className="mt-4">{chunks}</p>,
                    code: (chunks: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
                        <code className="font-mono text-white">{chunks}</code>
                    )
                })}
            </div>
        </PageLayout>
    );
}

export default PathnamesPage
