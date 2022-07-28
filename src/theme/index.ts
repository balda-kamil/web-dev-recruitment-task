const colors = {
    BLACK: '#080F1A',
    WHITE: '#fff',
    GRAY_50: '#F5F7F9',
};

const typography = {
    heading: {
        H1: {
            fontSize: '52px',
            lineHeight: '64px',
            letterSpacing: '-0.03em',
        },
    },
    content: {
        UI24: {
            fontSize: '24px',
            lineHeight: '32px',
            letterSpacing: '-0.02em',
        },
        UI20: {
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: '-0.01em',
        },
        UI16: {
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '-0.01em',
        },
    },
};

export interface AppTheme {
    color: typeof colors;
    typography: typeof typography;
}

export const theme: AppTheme = {
    color: colors,
    typography,
};
