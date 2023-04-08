import { createContext, ReactNode, useState } from 'react';

export interface AccordionContextProps {
    openAccordionIndex: number | string;
    setOpenAccordionIndex: (index: number) => void;
}

// create context
export const AccordionContext = createContext<AccordionContextProps>({
    openAccordionIndex: 0,
    setOpenAccordionIndex: () => {},
});

interface AccordionProviderProps {
    children: ReactNode;
}

// provide context
export const AccordionProvider = ({ children }: AccordionProviderProps) => {
    const [openAccordionIndex, setOpenAccordionIndex] = useState(0);

    return (
        <AccordionContext.Provider value={{ openAccordionIndex, setOpenAccordionIndex }}>
            {children}
        </AccordionContext.Provider>
    );
};
