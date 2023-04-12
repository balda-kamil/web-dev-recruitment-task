import React from 'react';
import styled from '@emotion/styled';
import { mq } from '@/theme/index';

type StyledHeadingProps = Omit<HeadingProps, 'text' | 'testId'>;

// easy to add other heading tags is needed normal project

const StyledHeading = styled(({ as: T = 'h1', ...props }) => <T {...props} />)<StyledHeadingProps>(
    (props) => {
        switch (props.as) {
            case 'h1':
                return {
                    ...props.theme.typography.heading.H1_MOBILE,
                    [mq('md')]: {
                        ...props.theme.typography.heading.H1,
                    },
                };
            case 'h4':
                return {
                    ...props.theme.typography.heading.H4_MOBILE,
                    [mq('md')]: {
                        ...props.theme.typography.heading.H4,
                    },
                };
        }
    },
);

export enum HeadingTypes {
    H1 = 'h1',
    H4 = 'h4',
}

interface HeadingProps {
    text: string;
    testId: string;
    as: HeadingTypes;
    align?: 'center' | 'right';
}

const Heading = ({ text, testId, ...props }: HeadingProps) => {
    return (
        <StyledHeading data-testid={`${testId}-${props.as}`} {...props}>
            {text}
        </StyledHeading>
    );
};

export default Heading;
