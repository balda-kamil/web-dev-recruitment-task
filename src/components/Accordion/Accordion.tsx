import { WidgetInterface } from '../../types/AccordionTypes';
import Image from 'next/image';
import styled from '@emotion/styled';
import { mq } from '../../theme';
import Paragraph from '../Paragraph/Paragraph';

type AccordionProps = {
    data: WidgetInterface[];
};

const Accordion = ({ data }: AccordionProps) => {
    return (
        <>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <AccordionItemTitle weight={600}>{item.title}</AccordionItemTitle>
                        <Paragraph>{item.description}</Paragraph>
                        <div style={{ position: 'relative', width: 50, height: 50 }}>
                            <Image src={item.icon} alt={item.title} fill />
                        </div>
                        <StyledImage
                            src={item.image.large.url}
                            alt={item.image.alt}
                            width={item.image.large.width}
                            height={item.image.large.height}
                            large
                        />
                        <StyledImage
                            src={item.image.small.url}
                            alt={item.image.alt}
                            width={item.image.small.width}
                            height={item.image.small.height}
                            small
                        />
                    </div>
                );
            })}
        </>
    );
};

export default Accordion;

const StyledImage = styled(Image)<{ large?: boolean; small?: boolean }>`
    display: ${(props) => (props.small ? 'block' : 'none')};

    ${mq('md')} {
        display: ${(props) => (props.large ? 'block' : 'none')};
    }
`;

const AccordionItemTitle = styled(Paragraph)((props) => ({
    ...props.theme.typography.content.UI20,

    [mq('md')]: {
        ...props.theme.typography.content.UI24,
    },
}));
