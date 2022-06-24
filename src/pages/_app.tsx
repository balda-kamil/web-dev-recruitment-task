import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme';
import GlobalStyles from '../theme/globalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            {GlobalStyles}
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
