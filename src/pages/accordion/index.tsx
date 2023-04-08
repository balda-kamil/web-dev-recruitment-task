import type { GetStaticProps } from 'next';
import Container from '../../components/Container/Container';
import { AccordionPageTypes } from '../../types/AccordionTypes';
import { getAccordionPageData } from '../../client/services/accordionPage/getAccordionPageData';
import Accordion from '../../components/Accordion/Accordion';
import Hero from '../../components/Hero/Hero';
import { AccordionProvider } from '../../components/Accordion/AccordionContext';

const AccordionPage = ({ data }: AccordionPageTypes) => {
    return (
        <>
            <Container>
                <Hero title={data.header} description={data.description} />
            </Container>
            <Container>
                <AccordionProvider>
                    <Accordion data={data.widget} />
                </AccordionProvider>
            </Container>
        </>
    );
};

export default AccordionPage;

export const getStaticProps: GetStaticProps<AccordionPageTypes> = async () => {
    const res = await getAccordionPageData();

    const data: AccordionPageTypes = await res.json();

    return {
        props: {
            ...data,
        },
    };
};
