import React from "react";
import styled from "@emotion/styled";
import {mq, theme} from "../../theme";

type StyledHeadingProps = Pick<HeadingProps, 'align'>

const StyledHeading = styled('h1')<StyledHeadingProps>(
    props => ({
        ...props.theme.typography.heading.H1,
        textAlign: props.align || 'left',
        color: theme.color.BLACK,
        [mq('md')]: {
            ...props.theme.typography.heading.H1_MOBILE,
        }
    }),
)

interface HeadingProps {
    text: string
    align?: 'center' | 'right'
}

const Heading = ({text, align}: HeadingProps) => {
    return (
        <StyledHeading align={align}>
            {text}
        </StyledHeading>
    )

};

export default Heading;