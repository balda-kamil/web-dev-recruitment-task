import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return <div>
        <ul>
            <li>
                <Link href="/">Home Page</Link>
            </li>
            <li>
                <Link href="/accordion">Accordion</Link>
            </li>
        </ul>
    </div>
};

export default Header;
