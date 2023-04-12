import { fireEvent, render, waitFor } from '@testing-library/react';
import * as mockedData from '../../mockedData.json';
import Accordion from '@/components/Accordion/Accordion';
import { theme } from '@/theme/index';
import { ThemeProvider } from '@emotion/react';

const providedData = mockedData.data.widget;

describe('should render correctly and open/close on click on mobile', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 360,
        });
    });

    it('should have correct box-shadow and background color', () => {
        const { getByTestId, getAllByAltText, getByText } = render(
            <ThemeProvider theme={theme}>
                <Accordion data={providedData} />
            </ThemeProvider>,
        );

        const accordionWrapper1 = getByTestId(`accordion-item-1`);
        expect(accordionWrapper1).toHaveStyle('background: #fff');
        expect(accordionWrapper1).toHaveStyle('box-shadow: 0 2px 8px rgba(0, 27, 71, .28)');

        const accordionWrapper2 = getByTestId(`accordion-item-2`);
        expect(accordionWrapper2).toHaveStyle('background: #F5F7F9');
        expect(accordionWrapper2).toHaveStyle('box-shadow: unset');

        providedData.forEach((obj) => {
            expect(getByText(obj.title)).toBeVisible();
            expect(getByText(obj.description)).toBeVisible();

            const images = getAllByAltText(obj.image.alt);
            images.map((img) => {
                expect(img).toBeInTheDocument();
            });
        });
    });
});

describe('should render correctly and open/close on click on desktop', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1200,
        });
    });

    it('should have correct box-shadow and background color', async () => {
        const { getByTestId, getAllByAltText, getByText } = render(
            <ThemeProvider theme={theme}>
                <Accordion data={providedData} />
            </ThemeProvider>,
        );

        const accordionWrapper1 = getByTestId(`accordion-item-1`);
        expect(accordionWrapper1).toHaveStyle('box-shadow: 0 2px 8px rgba(0, 27, 71, .28)');

        const accordionWrapper2 = getByTestId(`accordion-item-2`);
        expect(accordionWrapper2).toHaveStyle('box-shadow: unset');

        providedData.forEach((obj) => {
            expect(getByText(obj.title)).toBeVisible();

            const subheading = getByText(obj.description);
            fireEvent.click(getByText(obj.title));

            waitFor(() => {
                expect(subheading).toBeVisible();
            });

            let wrapper = getByTestId(`accordion-item-${obj.id}`);
            expect(wrapper).toHaveStyle('background: rgb(255, 255, 255');

            const images = getAllByAltText(obj.image.alt);
            images.map((img) => {
                expect(img).toBeInTheDocument();
            });
        });
    });
});
