import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { mq } from '../../theme';

const ContainerElement = styled.div`
    width: 100%;
    margin-block: 60px;
    padding-inline: 14px;

    ${mq('md')} {
        padding-inline: 40px;
    }

    ${mq('lg')} {
        margin-block: 120px 80px;
        padding-inline: 92px;
    }
`;

interface ContainerProps {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return <ContainerElement>{children}</ContainerElement>;
};

export default Container;
