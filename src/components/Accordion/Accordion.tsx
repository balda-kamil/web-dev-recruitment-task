import { WidgetInterface } from '../../types/AccordionTypes';
import Image from 'next/image';
import styled from '@emotion/styled';
import { mq } from '../../theme';
import Paragraph from '../Paragraph/Paragraph';
import Heading, { HeadingTypes } from '../Heading/Heading';
import { useContext } from 'react';
import { AccordionContext } from './AccordionContext';

type AccordionProps = {
    data: WidgetInterface[];
};

const Accordion = ({ data }: AccordionProps) => {
    const { openAccordionIndex, setOpenAccordionIndex } = useContext(AccordionContext);

    const handleClick = (id: number) => {
        const isOpen = openAccordionIndex === id;

        if (isOpen) return;

        setOpenAccordionIndex(id);
    };

    return (
        <>
            {data.map((item) => {
                return (
                    <AccordionItem
                        key={item.id}
                        isExpanded={openAccordionIndex === item.id}
                        onClick={() => handleClick(item.id)}
                    >
                        <AccordionContentWrapper>
                            <AccordionImageWrapper>
                                <Image src={item.icon} alt={item.title} fill />
                            </AccordionImageWrapper>
                            <div>
                                <StyledHeading text={item.title} as={HeadingTypes.H4} />
                                <Paragraph>{item.description}</Paragraph>
                            </div>
                        </AccordionContentWrapper>
                        <StyledImage
                            src={item.image.large.url}
                            alt={item.image.alt}
                            width={item.image.large.width}
                            height={item.image.large.height}
                            size={'large'}
                        />
                        <StyledImage
                            src={item.image.small.url}
                            alt={item.image.alt}
                            width={item.image.small.width}
                            height={item.image.small.height}
                            size={'small'}
                        />
                    </AccordionItem>
                );
            })}
        </>
    );
};

export default Accordion;

const AccordionItem = styled.div<{ isExpanded: boolean }>`
    box-shadow: 0 2px 8px rgba(0, 27, 71, 0.28);
    border-radius: 16px;
    margin-block: 16px;
    padding-bottom: 32px;
    cursor: pointer;
    transition: background-color 0.5s ease-out;
    background-color: ${(props) =>
        props.isExpanded ? props.theme.color.WHITE : props.theme.color.GRAY_50};
`;

const AccordionContentWrapper = styled.div`
    padding: 24px 30px 32px 30px;
    display: flex;
    gap: 24px;
`;

const AccordionImageWrapper = styled.div`
    position: relative;
    min-width: 40px;
    height: 40px;
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 10px;
`;

const StyledImage = styled(Image)<{ size: 'large' | 'small' }>`
    display: ${(props) => (props.size === 'small' ? 'block' : 'none')};
    margin: 0 auto;

    ${mq('md')} {
        display: ${(props) => (props.size === 'large' ? 'block' : 'none')};
    }
`;
