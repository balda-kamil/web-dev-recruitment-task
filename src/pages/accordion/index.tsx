import type { NextPage } from 'next';
import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import styled from '@emotion/styled';
import { mq } from '../../theme';
import Accordion from '../../components/Accordion/Accordion';

const AccordionPage: NextPage = () => {
    const MobileTextBreak = styled('span')({
        display: 'block',

        [mq('md')]: {
            display: 'none',
        },
    });
    return (
        <>
            <Container>
                <Heading text="Chatbots can generate sales" align="center" marginBottom />

                <Paragraph align="center" big>
                    Explore new ways to capture leads and generate more sales.
                    <MobileTextBreak /> Discover some of our most popular sales chatbots templates:
                </Paragraph>
            </Container>
            <Container>
                <Accordion />
            </Container>
        </>
    );
};

export default AccordionPage;
