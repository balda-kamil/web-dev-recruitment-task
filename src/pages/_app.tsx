import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/theme/index';
import GlobalStyles from '@/theme/globalStyles';
import PageLayout from '@/layouts/PageLayout/PageLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            {GlobalStyles}
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
        </ThemeProvider>
    );
};

export default MyApp;
