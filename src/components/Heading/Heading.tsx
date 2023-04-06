import React from 'react';
import styled from '@emotion/styled';
import { mq } from '../../theme';

type StyledHeadingProps = Omit<HeadingProps, 'text'>;

const StyledHeading = styled(({ as: T = 'h1', ...props }) => <T {...props} />)<StyledHeadingProps>(
    (props) => ({
        ...props.theme.typography.heading.H1_MOBILE,
        textAlign: props.align || 'left',

        [mq('md')]: {
            ...props.theme.typography.heading.H1,
        },
    }),
);

interface HeadingProps {
    text: string;
    align?: 'center' | 'right';
}

const Heading = ({ text, ...props }: HeadingProps) => {
    return <StyledHeading {...props}>{text}</StyledHeading>;
};

export default Heading;
