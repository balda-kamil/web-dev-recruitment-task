import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";


const StyledMenuList = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 40px auto;
  padding: 0;
  list-style-type: none;
  justify-content: center;
`
const Header: React.FC = () => {
    return (
        <StyledMenuList>
            <li>
                <button>
                    <Link href="/">Main Page</Link>
                </button>
            </li>
            <li>
                <button>
                    <Link href="/accordion">Accordion</Link>
                </button>
            </li>
        </StyledMenuList>
        )

};

export default Header;
