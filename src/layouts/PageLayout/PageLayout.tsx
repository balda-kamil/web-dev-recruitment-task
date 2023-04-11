import Header from "components/Header/Header";
import {ReactNode} from "react";

interface PageLayoutProps {
    children: ReactNode
}

const PageLayout = ({children}: PageLayoutProps) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    );
};

export default PageLayout;
