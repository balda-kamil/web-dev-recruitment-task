import { WidgetInterface } from '@/types/AccordionTypes';
import Image from 'next/image';
import styled from '@emotion/styled';
import Paragraph from '@/components/Paragraph/Paragraph';
import Heading, { HeadingTypes } from '@/components/Heading/Heading';
import { useContext } from 'react';
import { AccordionContext } from './AccordionContext';
import { mq } from '@/theme/index';

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

    const accordionHeight = Math.max(...data.map((item) => item.image.large.height));

    return (
        <AccordionWrapper elementHeight={accordionHeight} data-testid="accordion-component">
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
                        data-testid={`accordion-item-${item.id}`}
                    >
                        <AccordionContentWrapper isExpanded={isExpanded}>
                            <AccordionImageWrapper>
                                <Image src={item.icon} alt={item.title} fill />
                            </AccordionImageWrapper>
                            <div>
                                <StyledHeading
                                    testId="accordion-heading"
                                    text={item.title}
                                    as={HeadingTypes.H4}
                                />
                                <Paragraph testId="accordion-subheading">
                                    {item.description}
                                </Paragraph>
                            </div>
                        </AccordionContentWrapper>
                        <ImagesWrapper
                            isExpanded={isExpanded}
                            heightLarge={heightLarge}
                            heightSmall={heightSmall}
                            bgUrl={item.image.large.url}
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
        </AccordionWrapper>
    );
};

export default Accordion;

const AccordionWrapper = styled.div<{ elementHeight: number }>`
  position: relative;
  height: auto;

  ${mq('xl')} {
    padding-block: 80px;
    max-width: 1016px;
    margin: 0 auto;
    height: ${(props) => `${props.elementHeight}px`}
`;

const AccordionItem = styled.div<{ isExpanded: boolean }>`
    box-shadow: ${(props) => (props.isExpanded ? '0 2px 8px rgba(0, 27, 71, .28)' : 'unset')};
    border-radius: 16px;
    margin: 16px 0;
    padding-bottom: ${(props) => (props.isExpanded ? '32px' : '0')};
    cursor: pointer;
    transition: all 0.5s ease-out;
    transition-property: background, box-shadow, margin-top, margin-bottom;
    background-color: ${(props) =>
        props.isExpanded ? props.theme.color.WHITE : props.theme.color.GRAY_50};

    ${mq('md')} {
        margin: ${(props) => (props.isExpanded ? '16px 20px 26px 20px' : '16px 20px 16px 20px')};
        padding-bottom: 0;
    }

    ${mq('xl')} {
        background-color: ${(props) => props.theme.color.WHITE};
        margin: 16px 0;
        display: flex;
        box-shadow: unset;
        align-items: center;
        padding-bottom: 0;
    }
`;

const AccordionContentWrapper = styled.div<{ isExpanded: boolean }>`
    padding: ${(props) => (props.isExpanded ? '24px 30px 32px' : '24px')};
    transition: padding 0.5s ease-out;
    display: flex;
    gap: 24px;

    ${mq('md')} {
        padding: ${(props) => (props.isExpanded ? '24px 30px 10px 30px' : '24px 30px')};
        cursor: pointer;
    }

    ${mq('xl')} {
        box-shadow: ${(props) => (props.isExpanded ? '0 2px 8px rgba(0, 27, 71, .28)' : 'unset')};
        border-radius: 16px;
        max-width: 488px;
        height: fit-content;
        margin: 0 0 0 auto;
        padding: 24px 32px 24px 30px;

        p {
            height: ${(props) => (props.isExpanded ? 'auto' : 0)};
            opacity: ${(props) => (props.isExpanded ? 1 : 0)};
            transition: all 0.5s ease-out;
            transition-property: height, opacity;
        }
    }
`;

const AccordionImageWrapper = styled.div`
    position: relative;
    min-width: 40px;
    height: 40px;
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 10px;
`;

const StyledImage = styled(Image)<{ size: 'large' | 'small'; isExpanded?: boolean; width: number }>`
    display: ${(props) => (props.size === 'small' ? 'block' : 'none')};
    margin: 0 auto;

    ${mq('md')} {
        display: ${(props) => (props.size === 'large' ? 'block' : 'none')};
    }

    ${mq('xl')} {
        margin-left: ${(props) => (488 - props.width) / 2 + 'px'};
    }
`;

const ImagesWrapper = styled.div<{
    isExpanded: boolean;
    heightSmall: number;
    heightLarge: number;
    bgUrl: string;
}>`
    height: ${(props) => (props.isExpanded ? `${props.heightSmall}px` : 0)};
    opacity: ${(props) => (props.isExpanded ? 1 : 0)};
    transition: all 0.5s ease-out;
    transition-property: height, opacity;
    overflow: hidden;

    ${mq('md')} {
        height: ${(props) => (props.isExpanded ? `${props.heightLarge}px` : 0)};
    }

    ${mq('xl')} {
        order: -1;
        display: flex;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        height: ${(props) => `${props.heightLarge}px`};
        width: 488px;
    }
`;
