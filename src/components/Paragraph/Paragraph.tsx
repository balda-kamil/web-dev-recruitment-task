import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { mq } from '../../theme';

type StyledHeadingProps = Omit<ParagraphProps, 'text'>;

const StyledParagraph = styled('p')<StyledHeadingProps>((props) => ({
    ...(!!props.big ? props.theme.typography.content.UI18 : props.theme.typography.content.UI16),
    textAlign: props.align || 'left',
    margin: 0,
    fontWeight: props.weight || 400,

    [mq('md')]: {
        ...(!!props.big
            ? props.theme.typography.content.UI24
            : props.theme.typography.content.UI20),
    },
}));

interface ParagraphProps {
    children: ReactNode;
    align?: 'center' | 'right';
    big?: boolean;
    paddingInline?: boolean;
    weight?: 400 | 500 | 600;
}

const Paragraph = ({ children, ...props }: ParagraphProps) => {
    return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export default Paragraph;
