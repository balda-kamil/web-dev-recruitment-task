const colors = {
    BLACK: '#080F1A',
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
        PL: {
            fontSize: '24px',
            lineHeight: '32px',
            letterSpacing: '-0.02em',
        },
        PM: {
            fontSize: '20px',
            lineHeight: '32px',
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
