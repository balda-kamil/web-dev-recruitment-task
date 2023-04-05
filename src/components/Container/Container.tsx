import React, {ReactNode} from "react";
import styled from "@emotion/styled";
import {mq} from "../../theme";

const ContainerElement = styled.div`
  width: 100%;
  margin-block: 8px;
  padding-inline: 16px;
  
  ${mq('md')}{
    margin-block: 32px;
    padding-inline: 32px;
  }
`

interface Test {
    children: ReactNode
}

const Container = ({children} : Test) => {
    return (
        <ContainerElement>
            {children}
        </ContainerElement>
    );
};

export default Container;
