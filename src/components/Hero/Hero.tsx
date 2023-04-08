import Heading, { HeadingTypes } from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import styled from '@emotion/styled';

interface HeroInterface {
    title: string;
    description: string;
}
const Hero = ({ title, description }: HeroInterface) => {
    return (
        <HeroWrapper>
            <Heading text={title} align="center" as={HeadingTypes.H1} />
            <Paragraph align="center" big>
                {description}
            </Paragraph>
        </HeroWrapper>
    );
};

export default Hero;

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
