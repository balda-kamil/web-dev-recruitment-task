import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccordionPage from '@/pages/accordion';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/theme/index';
import GlobalStyles from '@/theme/globalStyles';
import { beforeEach } from '@jest/globals';

import * as mockedData from '../../mockedData.json';

describe('Accordion page', () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                {GlobalStyles}
                <AccordionPage data={mockedData.data} />
            </ThemeProvider>,
        );
    });

    it('Should have heading and subheading with specific text', () => {
        const heading = screen.getByTestId('heading-h1');
        const subHeading = screen.getByTestId('subheading');

        expect(heading).toHaveTextContent(mockedData.data.header);
        expect(subHeading).toHaveTextContent(mockedData.data.description);
    });

    it('Should have accordion', () => {
        const accordion = screen.getByTestId('accordion-component');

        expect(accordion).toBeInTheDocument();
    });
});
