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

    const handleClick = (index: number) => {
        const isOpen = openAccordionIndex === index;

        if (isOpen) return;

        setOpenAccordionIndex(index);
    };

    return (
        <>
            {data.map((item, index) => {
                const isExpanded = openAccordionIndex === index;
                const heightLarge = item.image.large.height;
                const heightSmall = item.image.small.height;
                const widthLarge = item.image.large.width;
                const widthSmall = item.image.small.width;

                return (
                    <AccordionItem
                        key={item.id}
                        isExpanded={isExpanded}
                        onClick={() => handleClick(index)}
                    >
                        <AccordionContentWrapper isExpanded={isExpanded}>
                            <AccordionImageWrapper>
                                <Image src={item.icon} alt={item.title} fill />
                            </AccordionImageWrapper>
                            <div>
                                <StyledHeading text={item.title} as={HeadingTypes.H4} />
                                <Paragraph>{item.description}</Paragraph>
                            </div>
                        </AccordionContentWrapper>
                        <ImagesWrapper
                            isExpanded={isExpanded}
                            heightLarge={heightLarge}
                            heightSmall={heightSmall}
                        >
                            <StyledImage
                                src={item.image.large.url}
                                alt={item.image.alt}
                                width={widthLarge}
                                height={heightLarge}
                                size={'large'}
                            />
                            <StyledImage
                                src={item.image.small.url}
                                alt={item.image.alt}
                                width={widthSmall}
                                height={heightSmall}
                                size={'small'}
                            />
                        </ImagesWrapper>
                    </AccordionItem>
                );
            })}
        </>
    );
};

export default Accordion;

const AccordionItem = styled.div<{ isExpanded: boolean }>`
    box-shadow: ${(props) => (props.isExpanded ? '0 2px 8px rgba(0, 27, 71, .28)' : 'unset')};
    border-radius: 16px;
    margin: ${(props) => (props.isExpanded ? '16px 0 26px 0' : '16px 0')};
    padding-bottom: ${(props) => (props.isExpanded ? '32px' : '0')};
    cursor: pointer;
    transition: all 0.5s ease-out;
    transition-property: background, box-shadow, margin-top, margin-bottom;
    background-color: ${(props) =>
        props.isExpanded ? props.theme.color.WHITE : props.theme.color.GRAY_50};

    ${mq('md')} {
        background-color: ${(props) => props.theme.color.WHITE};
        margin: 16px 0;
    }
`;

const AccordionContentWrapper = styled.div<{ isExpanded: boolean }>`
    padding: ${(props) => (props.isExpanded ? '24px 30px 32px' : '24px')};
    transition: padding 0.5s ease-out;
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

const ImagesWrapper = styled.div<{ isExpanded: boolean; heightSmall: number; heightLarge: number }>`
    height: ${(props) => (props.isExpanded ? `${props.heightSmall}px` : 0)};
    opacity: ${(props) => (props.isExpanded ? 1 : 0)};
    transition: all 0.5s ease-out;
    transition-property: height, opacity;
    overflow: hidden;
`;
