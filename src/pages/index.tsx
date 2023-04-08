import type { NextPage } from 'next';
import Container from '../components/Container/Container';
import Heading, { HeadingTypes } from '../components/Heading/Heading';

const IndexPage: NextPage = () => {
    return (
        <Container>
            <Heading text="Let's go to AccordionPage page" align="center" as={HeadingTypes.H1} />
        </Container>
    );
};

export default IndexPage;
