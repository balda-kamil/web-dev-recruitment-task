import React from 'react';
import styled from '@emotion/styled';
import { mq } from '../../theme';

type StyledHeadingProps = Omit<HeadingProps, 'text'>;

const StyledHeading = styled('h1')<StyledHeadingProps>((props) => ({
    ...props.theme.typography.heading.H1_MOBILE,
    textAlign: props.align || 'left',
    marginBottom: !!props.marginBottom ? 20 : 0,

    [mq('md')]: {
        ...props.theme.typography.heading.H1,
    },
}));

interface HeadingProps {
    text: string;
    align?: 'center' | 'right';
    marginBottom?: boolean;
}

const Heading = ({ text, ...props }: HeadingProps) => {
    return <StyledHeading {...props}>{text}</StyledHeading>;
};

export default Heading;
