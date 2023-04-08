import { createContext, ReactNode, useState } from 'react';

export interface AccordionContextProps {
    openAccordionIndex: number;
    setOpenAccordionIndex: (index: number) => void;
}

// create context
export const AccordionContext = createContext<AccordionContextProps>({
    openAccordionIndex: 1,
    setOpenAccordionIndex: () => {},
});

interface AccordionProviderProps {
    children: ReactNode;
}

// provide context
export const AccordionProvider = ({ children }: AccordionProviderProps) => {
    const [openAccordionIndex, setOpenAccordionIndex] = useState(1);

    return (
        <AccordionContext.Provider value={{ openAccordionIndex, setOpenAccordionIndex }}>
            {children}
        </AccordionContext.Provider>
    );
};
