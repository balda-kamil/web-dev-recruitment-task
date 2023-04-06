import { css, Global } from '@emotion/react';
import { theme } from './index';

const fontLight = css({
    '@font-face': {
        fontFamily: "'euclidcircularb'",
        src: [
            "url('/fonts/euclid-font/euclidcircularb-regular.woff2') format('woff2'), url('/fonts/euclid-font/euclidcircularb-regular.woff') format('woff')",
        ],
        fontWeight: '400',
        fontStyle: 'normal',
        fontDisplay: 'swap',
    },
});
const fontMedium = css({
    '@font-face': {
        fontFamily: "'euclidcircularb'",
        src: [
            "url('/fonts/euclid-font/euclidcircularb-medium.woff2') format('woff2'), url('/fonts/euclid-font/euclidcircularb-medium.woff') format('woff')",
        ],
        fontWeight: '500',
        fontStyle: 'normal',
        fontDisplay: 'swap',
    },
});

const fontSemiBold = css({
    '@font-face': {
        fontFamily: "'euclidcircularb'",
        src: [
            "url('/fonts/euclid-font/euclidcircularb-semibold.woff2') format('woff2'), url('/fonts/euclid-font/euclidcircularb-semibold.woff') format('woff')",
        ],
        fontWeight: '600',
        fontStyle: 'normal',
        fontDisplay: 'swap',
    },
});

const globalCss = css({
    'html, body': {
        padding: '0',
        margin: '0',
        fontFamily:
            'euclidcircularb, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        lineHeight: 1.6,
        fontSize: '18px',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
    },
    'h1, h2, h3, h4, h5, h6': {
        marginTop: '0',
        marginBottom: '0',
        color: theme.color.BLACK,
    },
    '*': { boxSizing: 'border-box' },
    button: {
        padding: '5px 12px',
        textAlign: 'center',
        color: theme.color.BLACK,
        background: theme.color.WHITE,
        border: `1px solid ${theme.color.BLACK}`,
        borderRadius: '4px',
    },
    p: {
        color: theme.color.BLACK,
    },
    a: {
        textDecoration: 'none',
        color: 'inherit',
    },
    li: {
        listStyleType: 'none',
    },
});

const GlobalStyles = <Global styles={[fontLight, fontMedium, fontSemiBold, globalCss]} />;

export default GlobalStyles;
