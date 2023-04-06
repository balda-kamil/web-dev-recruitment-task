import React, { useId } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const StyledMenuList = styled.ul`
    display: flex;
    gap: 16px;
    align-items: center;
    margin: 40px auto;
    padding: 0;
    list-style-type: none;
    justify-content: center;
`;
const Header = () => {
    const ID = useId();

    const mockedPages = [
        {
            href: '/',
            name: 'Main Page',
        },
        {
            href: '/accordion',
            name: 'Accordion',
        },
    ];

    return (
        <StyledMenuList>
            {mockedPages.map((item) => (
                <li key={`${ID}_${item.href}`}>
                    <button>
                        <Link href={item.href}>{item.name}</Link>
                    </button>
                </li>
            ))}
        </StyledMenuList>
    );
};

export default Header;
